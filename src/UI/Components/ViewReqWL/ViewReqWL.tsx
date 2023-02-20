import React, { FC, useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { IProps } from '../../../Interfaces/Component.interfaces';
import Service from '../../../Services/Service';

interface IReqWhiteList{
    name: string;
    user: string;
}

export const ViewReqWL: FC<IProps> = ({address}) => {

    const [reqList, setReqList] = useState<IReqWhiteList[]>([])
    console.log(reqList);
    
    useEffect(() => {
        (async () => {
            const viewReqWL: IReqWhiteList[] = await Service.viewReqWL(address);
            setReqList(viewReqWL)
        })()
    }, [reqList])
    
    const applyReqHandler = async(index: number, answer: boolean, address: string) =>{
        const apply = await Service.applyReqWL(index, answer, address)
    }
    
  return (
    <ListGroup as="ol" numbered style={{display: "flex", alignItems: "center"}}>
        {reqList.map((el: IReqWhiteList, idx: number) => {
            if(el.user.includes("000000")) return;
            return <ListGroup.Item key={idx} as="li">
                Имя: {el.name} | Адрес: {el.user}
                <Button variant="success" onClick={() => applyReqHandler(idx, true, address)} style={{marginLeft: "1rem"}}>Принять</Button>
                <Button variant="danger" onClick={() => applyReqHandler(idx, false, address)} style={{marginLeft: "1rem"}}>Отклонить</Button>
            </ListGroup.Item>
            console.log(el);
        })}
    </ListGroup>
  )
}
