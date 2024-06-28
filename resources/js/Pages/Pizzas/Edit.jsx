import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdatePizzaOrderForm from '../Profile/Partials/UpdatePizzaOrderForm';

export default function Edit({auth, pizza}){
    return (

        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order #{pizza.id}</h2>}
        >
        <Head title={'Order #' + pizza.id}></Head>

        <div className="py-12">
            <dix className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePizzaOrderForm pizza={pizza} className="max-w-xl"></UpdatePizzaOrderForm>
                </div>
            </dix>
        </div>

        </AuthenticatedLayout>
    )
}