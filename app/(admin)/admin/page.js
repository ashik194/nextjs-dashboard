'use client'
import React, { useState } from 'react'
import { BiUpArrowCircle } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import Chart from 'react-apexcharts'
import { FaPlus } from "react-icons/fa";
import Avater from "@/public/avater.svg";
import Link from 'next/link';
import Footer from '@/app/components/Footer';


function Dashboard() {
  const [chartOptions, setChartOptions] = useState(
    {
      options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996]
            }
          },
          series1: [
            {
              name: 'series-1',
              data: [30, 40, 35, 50, 49,  125]
            }
        ],
        series2: [
          {
            name: 'series-1',
            data: [90, 80, 90, 110, 100, 160, ]
          },
          {
            name: 'series-2',
            data: [50, 80, 35, 50,  91, 125]
          },
          {
            name: 'series-3',
            data: [30, 40, 35, 50, 49, 125]
          }
        ],
        series3: [
          {
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 125]
          },
          {
            name: 'series-2',
            data: [30, 45, 40, 55, 60, 145]
          }
        ]
    }
  )
  return (
    <>
        <div className='px-6 py-2 mt-2 border-b border-b-[#e9ebec] bg-white'>
          <h4 className='text-[15px] font-bold uppercase '>Dashboard</h4>
      </div>

       {/* ==================== Campaign Section  =================== */}
      <div className='px-6 mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        <div className='col-span-1 bg-white border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 bg-white border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 bg-white border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 bg-white border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>
        
        <div className='col-span-1 bg-white border border-[#e9ebec] py-6 px-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-500 uppercase font-semibold text-[0.8125rem]'>Campaign Sent</span>
            <BiUpArrowCircle className='text-xl text-green-600' />
          </div>
          <div className='flex gap-6 mt-4 text'>
            <BiSolidUpArrow className='text-3xl text-gray-600'/>
            <h3 className='text-3xl font-semibold text-gray-600'>197</h3>
          </div>
        </div>

      </div>

        {/* ==================== Chart Section  =================== */}
      <div className='mt-6 px-6'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div
              className="col-span-1 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Sales Forecast
              </div>
              <div className='w-full '>
                <Chart options={chartOptions.options} series={chartOptions.series1} type="bar" height={320} className="w-full" />
              </div>
          </div>
          <div
              className="col-span-1 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Sales Forecast
              </div>
              <div className='w-full '>
                <Chart options={chartOptions.options} series={chartOptions.series2} type="radar" height={320} className="w-full" />
              </div>
          </div>
          <div
              className="col-span-2 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Sales Forecast
              </div>
              <div className='w-full '>
                <Chart options={chartOptions.options} series={chartOptions.series3} type="area" height={320} className="w-full" />
              </div>
          </div>
      </div>
      </div>

      {/* ==================== Table Section  =================== */}
      <div className='px-6 mt-6 grid grid-cols-3 md:grid-cols-5 gap-6'>
          <div
              className="col-span-3 md:col-span-3 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Deals Status
              </div>
              <div className="card bg-white overflow-hidden">
                  <div className="">
                      <div className="overflow-x-auto">
                          <div className="min-w-full inline-block align-middle">
                              <div className=" overflow-hidden">
                                  <table className="min-w-full divide-y divide-gray-200">
                                      <thead className='bg-[#e9ebec]'>
                                          <tr className='text-[#878a99]'>
                                              <th scope="col" className="px-6 py-3 text-start text-sm text-gray-500">Name</th>
                                              <th scope="col" className="px-6 py-3 text-start text-sm text-gray-500">Last Contacted</th>
                                              <th scope="col" className="px-6 py-3 text-start text-sm text-gray-500">Sales Representative</th>
                                              <th scope="col" className="px-6 py-3 text-end text-sm text-gray-500">Status</th>
                                              <th scope="col" className="px-6 py-3 text-end text-sm text-gray-500">Deal Value</th>
                                          </tr>
                                      </thead>
                                      <tbody className="divide-y divide-gray-200">
                                          <tr>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sep 20, 2021</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                                <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Josef Risher
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                                <button className='bg-green-400/15 px-2 py-1 rounded-sm text-green-600 font-semibold text-xs'>Deal Won</button>
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$100.1K</td> 
                                          </tr>
                                          <tr>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sep 20, 2021</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                                <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Josef Risher
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                                <button className='bg-[#FFBC0A]/15 px-2 py-1 rounded-sm text-[#FFBC0A] font-semibold text-xs'>Deal Won</button>
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$100.1K</td> 
                                          </tr>
                                          <tr>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sep 20, 2021</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                                <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Josef Risher
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                                <button className='bg-[#F06548]/15 px-2 py-1 rounded-sm text-[#F06548] font-semibold text-xs'>Deal Won</button>
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$100.1K</td> 
                                          </tr>
                                          <tr>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sep 20, 2021</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                                <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Josef Risher
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                                <button className='bg-green-400/30 px-2 py-1 rounded-sm text-green-600 font-semibold text-xs'>Deal Won</button>
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$100.1K</td> 
                                          </tr>
                                          <tr>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Lindsay Walton</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sep 20, 2021</td>
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                                <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Josef Risher
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                                <button className='bg-[#32F0FF]/15 px-2 py-1 rounded-sm text-[#32e0ff] font-semibold text-xs'>Deal Won</button>
                                              </td> 
                                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$100.1K</td> 
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

            {/* ==================== Table Section  =================== */}
          <div
              className="col-span-3 md:col-span-2 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  My Tasks
              </div>
              <div className="card bg-white overflow-hidden">
                  <div className="p-4">
                    <div className='flex justify-between items-center'>
                        <p className='text-[#878a99] text-sm'> <span className='font-bold '>4</span> of <span className="font-bold">10</span> remaining</p>
                        <button className='flex items-center flex-shrink-0 bg-[#00bd9d] hover:bg-[#008e76] border-[#00bd9d] hover:border-[#008e76] text-xs font-semibold border-4 text-white px-2 rounded'><FaPlus className='pr-2 text-white text-lg' />Add Task</button>
                    </div>
                    
                    {/* ==================== Review List  =================== */}
                    <div>
                        <div className='flex justify-between mt-2 py-2 border-b border-dashed border-b-gray-300 '>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='accent-pink-300 focus:accent-pink-500' />
                                <span className='text-sm'>Review and make sure nothing slips through cracks</span>
                            </div>
                            <div className='px-4'> 
                                <span className='text-xs text-[#878a99]'>15 Sep, 2021</span>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2 py-2 border-b border-dashed border-b-gray-300 '>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='accent-pink-300 focus:accent-pink-500' />
                                <span className='text-sm'>Review and make sure nothing slips through cracks</span>
                            </div>
                            <div className='px-4'> 
                                <span className='text-xs text-[#878a99]'>15 Sep, 2021</span>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2 py-2 border-b border-dashed border-b-gray-300 '>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='accent-pink-300 focus:accent-pink-500' />
                                <span className='text-sm'>Review and make sure nothing slips through cracks</span>
                            </div>
                            <div className='px-4'> 
                                <span className='text-xs text-[#878a99]'>15 Sep, 2021</span>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2 py-2 border-b border-dashed border-b-gray-300 '>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='accent-pink-300 focus:accent-pink-500' />
                                <span className='text-sm'>Review and make sure nothing slips through cracks</span>
                            </div>
                            <div className='px-4'> 
                                <span className='text-xs text-[#878a99]'>15 Sep, 2021</span>
                            </div>
                        </div>
                        <div className='flex justify-between mt-2 py-2 border-b border-dashed border-b-gray-300 '>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='accent-pink-300 focus:accent-pink-500' />
                                <span className='text-sm'>Review and make sure nothing slips through cracks</span>
                            </div>
                            <div className='px-4'> 
                                <span className='text-xs text-[#878a99]'>15 Sep, 2021</span>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>


        {/* ==================== Events Section  =================== */}
        <div className='px-6 mt-6 grid grid-cols-3 md:grid-cols-5 gap-6'>
            <div
              className="col-span-3 md:col-span-2 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Upcoming Activities
              </div>
              <div className="card bg-white overflow-hidden">
                  <div className="px-4">
                      <ul className='flex flex-col border-b border-dashed border-b-gray-300  py-2'>
                        <li>
                            <div className='flex items-center flex-wrap'>
                                <div className=' bg-[#F1F4F7] rounded-sm m-[0.5rem] w-[3rem] py-2'>
                                    <div className='text-center'>
                                        <h5 className='lg'>25</h5>
                                        <div className='text-[#878a99]'>Tue</div>
                                    </div>
                                </div>
                                <div className='px-2 flex-1'>
                                    <h5 className='text-[#878a99] text-xs'>12:00am - 03:30pm</h5>
                                    <Link href="#" className='text-[0.875rem]'>Meeting for campaign with sales team</Link>
                                </div>
                                <div className='flex items-center'>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                      </ul>
                      <ul className='flex flex-col border-b border-dashed border-b-gray-300  py-2'>
                        <li>
                            <div className='flex items-center flex-wrap'>
                                <div className=' bg-[#F1F4F7] rounded-sm m-[0.5rem] w-[3rem] py-2'>
                                    <div className='text-center'>
                                        <h5 className='lg'>25</h5>
                                        <div className='text-[#878a99]'>Tue</div>
                                    </div>
                                </div>
                                <div className='px-2 flex-1'>
                                    <h5 className='text-[#878a99] text-xs'>12:00am - 03:30pm</h5>
                                    <Link href="#" className='text-[0.875rem]'>Meeting for campaign with sales team</Link>
                                </div>
                                <div className='flex items-center'>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                      </ul>
                      <ul className='flex flex-col border-b border-dashed border-b-gray-300  py-2'>
                        <li>
                            <div className='flex items-center flex-wrap'>
                                <div className=' bg-[#F1F4F7] rounded-sm m-[0.5rem] w-[3rem] py-2'>
                                    <div className='text-center'>
                                        <h5 className='lg'>25</h5>
                                        <div className='text-[#878a99]'>Tue</div>
                                    </div>
                                </div>
                                <div className='px-2 flex-1'>
                                    <h5 className='text-[#878a99] text-xs'>12:00am - 03:30pm</h5>
                                    <Link href="#" className='text-[0.875rem]'>Meeting for campaign with sales team</Link>
                                </div>
                                <div className='flex items-center'>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='hover:translate-y-[-2px] hover:transition-all hover:duration-200 hover:relative hover:z-10'>
                                        <div className=' flex flex-wrap ml-[-12px] border-2 border-white rounded-full'>
                                            <Link href="#" className='inline-block'>
                                                <img src={Avater.src} alt='' className='w-[1.5rem] h-[1.5rem] rounded-full'/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                      </ul>
                      
                    </div>
                </div>
            </div>

            <div
              className="col-span-3 md:col-span-3 border border-gray-300 block rounded-md bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface ">
              <div
                  className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                  Closing Deals
              </div>
                  <div className="p-4">
                      <div className="overflow-x-auto ">
                          <table className="min-w-full divide-y divide-gray-200 border border-collapse">
                              <thead>
                                  <tr>
                                      <th scope="col" className="border border-gray-200 px-6 py-3 text-start text-sm text-gray-500">Deal Name</th>
                                      <th scope="col" className="border border-gray-200 px-6 py-3 text-start text-sm text-gray-500">Sales Rep</th>
                                      <th scope="col" className="border border-gray-200 px-6 py-3 text-start text-sm text-gray-500">Amount</th>
                                      <th scope="col" className="border border-gray-200 px-6 py-3 text-start text-sm text-gray-500">Close Date</th> 
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                  <tr>
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Acme Inc Install</td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                        <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Jansh Brown
                                      </td> 
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm text-gray-800">$102k</td> 
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm text-gray-800">25 Nov 2021</td> 
                                  </tr>
                                  <tr>
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Acme Inc Install</td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                        <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Jansh Brown
                                      </td> 
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm text-gray-800">$102k</td> 
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm text-gray-800">25 Nov 2021</td> 
                                  </tr>
                                  <tr>
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Acme Inc Install</td>
                                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 flex gap-2 items-center">
                                        <img src={Avater.src} className='w-[30px] h-[30px] rounded-full mx-2' /> Jansh Brown
                                      </td> 
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm text-gray-800">$102k</td> 
                                      <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-sm text-gray-800">25 Nov 2021</td> 
                                  </tr>

                              </tbody>
                          </table>
                      </div>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard