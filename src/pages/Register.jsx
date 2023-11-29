import axios from "axios"
import { useFormik } from "formik"
import { getUsers } from "../api/userApi"
import * as Yup from "yup"

export default function Register() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema:Yup.object({
            name: Yup.string()
                .min(6, "*Min 6 character")
                .required("*Name must be filled"),
            email: Yup.string()
                .email("*Invalid email format, please use @")
                .required("*Email must be filled"),
            password: Yup.string()
                .min(6, "*Min 6 character")
                .required("*Password must be filled")
                .matches(/[a-z]/g, "Should contain at least 1 lowercase")
                .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
                .matches(/[0-9]/g, "Should contain at least 1 number")
                .matches(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/g, "Should contain at least 1 symbol")
        }),
        onSubmit:(values) => {
            axios.post("http://localhost:3000/users", {
                name: values.name,
                email: values.email,
                password: values.password
            })
            .then((res) => {
                alert("Register Successfull!!!")
                console.log(res)
                getUsers()
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    })

    return (
        <form className="item" onSubmit={formik.handleSubmit}>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Page Register</h2>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white rounded border border-gray-300 focus:border-[#008081] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {formik.touched.name && formik.errors.name ? (<div style={{color:"red"}}>{formik.errors.name}</div>) : null}
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white rounded border border-gray-300 focus:border-[#008081] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div>) : null}
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full bg-white rounded border border-gray-300 focus:border-[#008081] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {formik.touched.password && formik.errors.password ? (<div style={{color:"red"}}>{formik.errors.password}</div>) : null}
                        </div>
                        <button type="submit" className="text-black bg-[#b2f6eb] border-0 py-2 px-8 focus:outline-none hover:text-white hover:bg-[#008081] rounded text-lg">Submit</button>
                    </div>
                </div>
            </section>
        </form>
    )
}