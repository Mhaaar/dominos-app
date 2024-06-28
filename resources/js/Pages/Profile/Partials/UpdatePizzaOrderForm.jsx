import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput'; // Importa SelectInput si lo estás usando
import { useForm } from '@inertiajs/react';

export default function UpdatePizzaOrderForm({ pizza, className = '' }) {
    const { data, setData, patch, errors} = useForm({
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings.join(','),
        status: pizza.status,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('pizzas.update', pizza.id), data, {
            onSuccess: () => {
                // Manejar éxito
            },
            onError: (errors) => {
                // Manejar errores
            }
        });
    };

    const statusOptions = [
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready'
    ];

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    View or Change any information associated with this order
                </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size" />
                    <TextInput 
                        id="size"
                        className="mt-1 block w-full"
                        value={data.size}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />
                    <TextInput
                        id="crust"
                        className="mt-1 block w-full"
                        value={data.crust}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />
                    <TextInput
                        id="toppings"
                        className="mt-1 block w-full"
                        value={data.toppings}
                        disabled
                    />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />
                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.status} />
                </div>

                <div className='flex items-center gap-4'>
                    <PrimaryButton type="submit">Save Changes</PrimaryButton>
                    
                </div>
            </form>
        </section>
    );
}
