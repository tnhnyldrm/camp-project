import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues = { title: "bmw", price: 33 }

    const schema = Yup.object({
        title: Yup.string().required("title zorunlu"),
        price: Yup.number().required("price zorunlu")
    })

    return (
        <div>
            <Formik
                onSubmit={(values) => {
                    console.log(values);
                }}
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="title" placeholder="Title"/>
                    <KodlamaIoTextInput name="price" placeholder="Price"/>
                    <Button color='green' type="submit">Ürün Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
