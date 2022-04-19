import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import auth from '../../../fairbase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocilaLogin = () => {
    const navigate = useNavigate()

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    let hookError;


    if (loading) {
        return <loading></loading>
    }
    if (error || error2) {
        hookError = <div>
            <p>Error: {error?.message} {error2?.message}</p>
        </div>

    }
    if (user || user2) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{hookError}</p>
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn-info rounded p-1 mb-2 d-block mx-auto w-50'>
                    <img style={{ width: '30px', marginRight: '20px' }} src={google} alt="" />
                    Google sign In
                </button>
                <button className='btn-info rounded p-1 mb-2  d-block mx-auto w-50'>
                    <img style={{ width: '30px', marginRight: '20px' }} src={facebook} alt="" />
                    facebook sign In
                </button>
                <button onClick={() => signInWithGithub()} className='btn-info rounded p-1 mb-2  d-block mx-auto w-50'>
                    <img style={{ width: '30px', marginRight: '20px' }} src={github} alt="" />
                    gitHub sign In
                </button>
            </div>
        </div>
    );
};

export default SocilaLogin;