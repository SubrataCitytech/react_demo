import React from 'react'
import Input from '../../../../components/common/Input/Input'
import { useAuthForm } from '../../hooks/useAuth';

export default function Signup() {
    const { form, handleSignup } = useAuthForm();
    return (
        <>
            <div className="form-group">
                <label htmlFor="regusername">Username</label>
                <Input
                    type={'text'}
                    id={'regusername'}
                    value={form.regusername}
                    onChange={handleSignup}
                />
            </div>
            <div className="form-group">
                <label htmlFor="regemail">Email</label>
                <Input
                    type={'text'}
                    id={'regemail'}
                    value={form.regemail}
                    onChange={handleSignup}
                />
            </div>
            <div className="form-group">
                <label htmlFor="regpassword">Email</label>
                <Input
                    type={'text'}
                    id={'regpassword'}
                    value={form.regpassword}
                    onChange={handleSignup}
                />
            </div>
        </>
    )
}
