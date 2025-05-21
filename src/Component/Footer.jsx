import React from 'react'

function Footer() {
    return (
        <>
            <section className=' bg-gray-100'>
                <hr />

                <div className="container w-[1000px] mx-auto pb-5">
                    <div className="footer flex justify-between py-8">
                        <h5 className='font-bold text-[25px] text-[#4b4b4b]'>PRACAS Blogs</h5>
                        <div className="social-icons flex gap-4">
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="public/social-icons/facebook.svg" alt="facebook" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="public/social-icons/twitter.svg" alt="twitter" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="public/social-icons/youtube.svg" alt="youtube" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="public/social-icons/instagram.svg" alt="instagram" />
                        </div>
                    </div>

                    <div className="footer-list flex gap-28">
                        <div className="list">
                            <h5 className='text-[15px] font-semibold'>Our Team</h5>
                            <ul className='text-[13px] text-gray-500'>
                                <li className='py-1'>Chairman & Director : Sudhir Nepal</li>
                                <li className='py-1'>CTO : Prakash Sharma</li>
                                <li className='py-1'>Account : Niranjan Thapa</li>
                                <li className='py-1'>Executive Editor : Ram Prasad Poudel</li>
                                <li className='py-1'>PRO : Srisha Sharma</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h5 className='text-[15px] font-semibold'>Contact</h5>
                            <ul className='text-[13px] text-gray-500'>
                                <li className='py-1'>Suchana Bibhag Darta # 123-081/82</li>
                                <li className='py-1 flex'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="public/footer/location.svg" alt="location" /> Kamalpokhari, Kathmandu, Nepal</li>
                                <li className='py-1 flex'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="public/footer/phone.svg" alt="phone" /> +977-1-12345678</li>
                                <li className='py-1 flex'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="public/footer/email.svg" alt="email" /> info@biratinfo.com</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h5 className='text-[15px] font-semibold'>Download Our App</h5>
                            <img className='w-[145px] py-2' src="public/footer/google-play.webp" alt="" />
                            <img className='w-[145px]' src="public/footer/app-store.webp" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-[12px] container mx-auto w-[1000px] py-5 text-gray-500 flex justify-between">
                    <p>Copyright © 2025 BIRAT Informatics Pvt. Ltd. | A Product of SRIYOG Consulting</p>

                    <ul className="footer-list text-[12px] flex gap-5">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Advertise</li>
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Footer
