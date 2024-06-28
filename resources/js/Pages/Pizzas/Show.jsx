import { Head } from "@inertiajs/react";
import PizzaStatus from "../Profile/Partials/PizzaStatus";
import { useEffect } from "react";

export default function Show({ pizza }) {

    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({ only: ['pizza'] });
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="max-w-3xl mx-auto py-12">
            <Head title={"Order #" +pizza.id}></Head>
            <div className="py-8">
            <svg className="w-32 h-32 rotate-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <rect width="100" height="100" rx="10" ry="10" fill="#0064d2" />
                    <circle cx="30" cy="30" r="10" fill="#ffffff" />
                    <circle cx="70" cy="30" r="10" fill="#ffffff" />
                    <circle cx="50" cy="70" r="10" fill="#ffffff" />
                </svg>
            </div>
            <PizzaStatus currentStatus={pizza.status}></PizzaStatus>
            <div className="text-center mt-4">
                <p className="text-lg" >{pizza.chef} started {pizza.status.toLowerCase()} your order <span className="underline font-semibold">{pizza.last_updated}</span></p>

            </div>

        </div>
    );
}

        