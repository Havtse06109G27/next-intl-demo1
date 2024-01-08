import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Index() {
    const t = useTranslations('Index');
    return (
        <div>
            <div className="min-h-[100vh] flex flex-col bg-cover bg-center">
                <div className="bg-[#00000066] flex-1 flex flex-col">
                    <div className='p-4 pt-20 flex-1 flex flex-col items-center'>
                        <div className='flex-1 flex flex-col justify-center items-center w-[900px] max-w-[100vw] gap-4 desktop:px-4'>
                            <p className='font-normal text-base text-center text-[#ffe5b1] uppercase'>{t('introTitle')}</p>
                            <p style={{ fontFamily: "'Gilda Display',serif" }} className='font-normal text-base text-center text-[#ffe5b1] uppercase desktop:text-[55px] desktop:leading-[1.5]'>{t('introDescription')}</p>
                            <Button className='px-16 py-2 font-normal min-w-16 uppercase'>
                                {t('roomBtn')}
                            </Button>
                        </div>
                    </div>

                    <h1 className='text-white uppercase text-center'>{t('bookingForm')}</h1>
                </div>
            </div>
            <div className='py-20 bg-white'>
                <div className='w-full my-0 mx-auto block px-4 tablet:px-6 desktop:max-w-[1200px]'>
                    <div style={{ width: 'calc(100% + 32px)' }} className='flex flex-wrap flex-row -mt-8 -ml-8'>
                        <div className='pl-8 pt-8 basis-full grow-0 max-w-full desktop:basis-1/2 desktop:max-w-[50%]'>
                            <div className='flex flex-col gap-2'>
                                <p className='font-normal text-xl text-[#BF9B54]'>
                                    {t('introTitle')}
                                </p>
                                <p style={{ fontFamily: `'Gilda Display',serif` }} className='font-normal text-[#90704B] text-[50px]'>
                                    {t('bannerDescription')}
                                </p>
                                <p className='text-sm font-normal text-[#38393D]'>
                                    Welcome to 5-star luxury and dedicated service at AVARI. Modern design with classic royal style will bring a magnificent experience for those people who have a passion for travel. Let’s awaken your spirit. Create a whole new lifestyle with our service; from the most comfortable room to a sumptuous feast. Its extensive gastronomic offerings feature several restaurants and bars; and super wellness facilities, complemented by the magnificent view of Nha Trang city. Everything is accompanied by the urban and cosmopolitan spirit.
                                </p>
                            </div>
                        </div>
                        <div className='pl-8 pt-8 basis-full grow-0 max-w-full desktop:basis-1/2 desktop:max-w-[50%]'>
                            <div className='w-full h-full flex items-center justify-between gap-8'>
                                {/* <Image src="/images/introduction.jpeg" alt='introduction' width={500} height={500} className='w-full rounded-lg' /> */}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}