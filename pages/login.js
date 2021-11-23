import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from "../styles/styles.css"
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "../axios/axios"
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter()
    const onFinish = (values) => {
        axios({
            method: "POST",
            url: "/internal/api/auth/login",
            data: {
                email:values.email,
                password:values.password
            }
        })
        .then(({data}) => {
            Cookies.set("access_token", data.accessToken)
            Cookies.set("refresh_token", data.refreshToken)
            router.push("/")
        })
        .catch(err =>  console.log(err))
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={styles.logincontainer}>
            <img src="https://dev.www.portoapp.id/Porto-logo.png" className={styles.logo} />
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={(values) => onFinish(values)}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{marginTop:"30px"}}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};