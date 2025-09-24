import Form from './Components/Form.jsx';
import SocialButton from './Components/SocialButton.jsx'
function Contact() {
       return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
            <h1 className="text-4xl font-extrabold text-center text-white mb-8">How to Reach Me!</h1>
            <div className="flex flex-row  gap-20">
               <div className='flex flex-start'>
                <Form />
               </div>  
                <SocialButton />

            </div>

        </div>
       )

}

export default Contact;