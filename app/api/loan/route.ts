import {NextResponse} from 'next/server'
export async function POST(request:Request){const application=await request.json();if(!application.captchaToken)return NextResponse.json({error:'CAPTCHA verification required'},{status:400});return NextResponse.json({ok:true,reference:`LN-${Date.now().toString().slice(-6)}`,message:'Loan application received.'},{status:201})}
