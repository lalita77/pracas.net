import React from 'react'

function Footer() {
    return (
        <>
            <section className=' bg-gray-100'>
                <hr />

                <div className="container w-[1000px] mx-auto pb-5">
                    <div className="footer flex justify-between py-8">
                        <h5 className='font-bold text-[25px] text-[#4b4b4b]'>PRACAS Blogs</h5>
                        <div className="social-icons flex gap-3">
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/image/social-icons/facebook.svg" alt="facebook" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/image/social-icons/twitter.svg" alt="twitter" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/image/social-icons/youtube.svg" alt="youtube" />
                            <img className='border rounded-full p-2 w-[35px] h-[35px] bg-white' src="/image/social-icons/instagram.svg" alt="instagram" />
                        </div>
                    </div>

                    <div className="footer-list flex gap-28">
                        <div className="list">
                            <h5 className='text-[15px] font-semibold'>Contributors</h5>
                            <ul className='text-[13px] text-gray-500'>
                                <li className='py-1'>React Js  : Lalita Ghimire</li>
                                <li className='py-1'>Blogger : PRACAS Upreti</li>
                                <li className='py-1'>Project Manager : Niranjan Sharma</li>
                                <li className='py-1'>UI/ UX : Dipak Pahari</li>
                                
                            </ul>
                        </div>

                        <div className="list">
                            <h5 className='text-[15px] font-semibold'>Contact</h5>
                            <ul className='text-[13px] text-gray-500'>
                                {/* <li className='py-1'>Suchana Bibhag Darta # 123-081/82</li> */}
                                <li className='py-1 flex gap-2 items-center'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="/image/footer/location.svg" alt="location" /> Kamalpokhari, Kathmandu, Nepal</li>
                                <li className='py-1 flex gap-2 items-center'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="/image/footer/phone.svg" alt="phone" /> +977-9852025735</li>
                                <li className='py-1 flex gap-2 items-center'><img className='w-[16px] rounded-full h-[17px] bg-slate-200 border' src="/image/footer/email.svg" alt="email" /> p@sriyog.com</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h5 className='text-[15px] font-semibold'>Download Our App</h5>
                            <img className='w-[145px] py-2' src="/image/footer/google-play.webp" alt="" />
                            <img className='w-[145px]' src="/image/footer/app-store.webp" alt="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-[12px] container mx-auto w-[1000px] py-5 text-gray-500 flex justify-between">
                    <p>Copyright © SRIYOG Consulting Pvt. Ltd.</p>

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
