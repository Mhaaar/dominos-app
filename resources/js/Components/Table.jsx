export default function Table({items, columns, primary, action}){
return(
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-4">{primary}</th>
            {columns.map((column) =>
            <th key={column} scope="col" class="px-6 py-4">{column}</th>
            )}
            <th scope = "col" class="px-6 py-4"></th>
        </tr>
        </thead>
        <tbody>
            {items.map((item)=>
            <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #{item.id}
                </th>
                {columns.map((column)=>
                <td key={column} class="px-6 py-4">
                    {item[column]}
                    </td>
                )}
                <td class="px-6 py-4">
                <a href={route(action, item.id)} className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap dark:text-blue-400">
                View Details
                </a>

                </td>
            </tr>


            )}

        </tbody>
    </table>
</div>
)
}