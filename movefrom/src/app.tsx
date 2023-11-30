// app.tsx
import React from 'react';
import FormRender, {useForm} from "form-render";
import schema from "./schema/simple";

const App = () => {
    const form = useForm();
    console.log('MyForm is rendering');


    const onFinish = (formData: any) => {
        console.log('formData:', formData);
    };

    return (
        <div className="App">
            <FormRender
                form={form}
                schema={schema}
                onFinish={onFinish}
                maxWidth={360}
                footer={true}
            />
        </div>
    );
};

export default App;
