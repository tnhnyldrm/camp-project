import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image,
} from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductsId(id).then(result => setProduct(result.data))
    }, [])

    return (
        <div>
            <Card fluid>
                <CardContent>
                    <Image
                        floated='right'
                        size='mini'
                        src={product.thumbnail}
                    />
                    <CardHeader>{product.title}</CardHeader>
                    <CardMeta>{product.price}  ₺</CardMeta>
                    <CardDescription>
                        {product.description}
                    </CardDescription>
                </CardContent>
                <CardContent extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
