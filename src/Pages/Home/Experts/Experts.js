import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';


const Experts = () => {
    const exparts = [
        { id: 1, name: 'Will smith', img: expart1 },
        { id: 2, name: 'Chris Rook', img: expart2 },
        { id: 3, name: 'Ronaldo', img: expart3 },
        { id: 4, name: 'messi', img: expart4 },
        { id: 5, name: 'tom cruise', img: expart5 },
        { id: 6, name: 'tom hanks', img: expart6 }
    ]



    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center mt-5'>0ur Experts</h2>
            <div className='row mx-auto'>
                {
                    exparts.map(expert => <Expert
                        expert={expert}
                        key={expert.id}
                    ></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;