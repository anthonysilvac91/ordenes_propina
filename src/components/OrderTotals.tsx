import { useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers"


type orderTotalsProps = {
    order : OrderItem[],
    tip:number,
    placeOrder : () => void
}


export const OrderTotals = ({order, tip, placeOrder} : orderTotalsProps) => {
  
    const subtotalAmaunt = useMemo(()=> order.reduce((total, item) => total + (item.quantity*item.price),0), [order])

    const tipAmaunt = useMemo(()=> subtotalAmaunt*tip,[tip,order])

    const totalAmaunt = useMemo(()=> subtotalAmaunt+tipAmaunt,[tip,order])

    
  
    return (
    <>
    <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>Subtotal a pagar: {''}
            <span className="font-bold">{formatCurrency(subtotalAmaunt)}</span> 
        </p>

        <p>Propina: {''}
            <span className="font-bold">{formatCurrency(tipAmaunt)}</span>

        </p>
        
        <p>Total a pagar: {''}
            <span className="font-bold">{formatCurrency(totalAmaunt)}</span>

        </p>
    </div>
    <button 
    className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
    disabled={totalAmaunt===0}
    onClick={placeOrder}
    >
        Guardar Orden
    </button>
    
    
    </>
  )
}
