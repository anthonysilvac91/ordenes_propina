import { formatCurrency } from "../helpers"
import { MenuItems, OrderItem } from "../types/types"

type OrderContentsProps = {
    order : OrderItem[],
    removeItem: (id: MenuItems['id']) => void
}


const OrderContents = ({order, removeItem} : OrderContentsProps) => {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {     order.map(item => (
                    <div key={item.id}
                    className="flex justify-between item-center border-b py-5">

                        <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency(item.price) }
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price*item.quantity)}

                        </p>

                        </div>
                       
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                        onClick={()=> removeItem(item.id)}>X</button>
                    </div>
                ))}

        </div>

    </div>
  )
}

export default OrderContents