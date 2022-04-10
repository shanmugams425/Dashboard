import React from 'react'

function DashComp(props) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
    <div class={props.cardData.bar}>
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class={props.cardData.textcolor}>
                        {props.cardData.title}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{props.cardData.price}</div>
                </div>
                <div class="col-auto">
            <i class={props.cardData.icon}></i>                
             </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DashComp