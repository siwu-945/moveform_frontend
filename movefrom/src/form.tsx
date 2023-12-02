import React, { useState } from 'react';
import FormRender, { useForm } from 'form-render';
import schema from "./schema/simple";
// import { submit } from './submit';
import {useSubmit} from "./use-submit";
import { SubmitSuccess } from "./submit-success";

export default () => {
    const form = useForm();
    const submit = useSubmit();
    const [showSuccess, setShowSuccess] = useState(false);
    const [txHash, setTxHash] = useState('' as string);

    const onFinish = async (formData: any) => {
        const res = await submit(formData);
        if (res) {
            setShowSuccess(true);
            setTxHash(res.hash);
        }
    };

    if (showSuccess) {
        return SubmitSuccess(txHash);
    }

    return (
        <FormRender
            form={form}
            schema={schema}
            onFinish={onFinish}
            maxWidth={360}
            // footer={true}
            footer={{
                submit: {
                    text: 'Submit',
                    hide: false
                },
                reset: {
                    text: 'Reset',
                    hide: false
                }
            }}
        />
    );
}
