import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-blue-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">This is the place where I get all my supplies for my studies.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Student</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">UOP</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">This is the place where I get all my supplies for my studies.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Student</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UOP</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">This is the place where I get all my supplies for my studies.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Student</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">UOP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial