import React ,{useState,useRef} from 'react'
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal'
 import './Signup.css';
 const customStyles = {
  content: {
    width:'100%',
    textAlign:'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Signup = () => {
    const [cnicDate, onChange] = useState("");
    // const [dob,onChange1] =useState(new Date());
    const [dob,onChange1]= useState("");
    const [image, setImage] = useState("");
    const languages=['java','.net','react','php'];
    const [choice, setChoice] = useState(false);
    const txtField = useRef(null);
    const [form,setForm]=useState({
        fname:"",
        lname:"",
        cnic:"",
        mob:"",
        province:"",
        email:"",
        relegion: "",
        education:"",
        FavLang:"",
        desc:"",
        password:"",
        confirmPassword:"",
        gender:"",
        games:""
        

    })
    const [error, setError] = useState({
      errFname: "first name should not empty",
      errLname: "last name should not be empty",
      errCnic: "cnic should not be empty",
      errCnicdate:"nis issu date is required",
      errMobile:"mobile number is not empty",
      errProv:"province is needed",
      errEmail:"emial is not empty",
      errGames:"game is needed",
      errRel:"relegion is needed",
      errEdu:"education is needed",
      errDob:"dob is needed",
      errLang:"at least one language is needed",
      errPwd:"password is needed",
      errCpwd:"confirm password is needed",
      errGender:"gender is needed",
      errDesc:"description is needed",
      errfavLang:"at least select one language",
      cnicPattern:"please enter cnic number in required pattern",
      errImg:"please choose a picture"
    });
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      if(!form.fname || !form.lname || !form.mob || !form.password || !form.FavLang || !form.cnic
         || !cnicDate || !form.confirmPassword || !form.desc ||  !form.education
        || !form.email || !form.games || !form.gender || !form.province || !form.relegion 
        ){
        setIsOpen(false); 
      }else{
      setIsOpen(true);
      }
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const OnChangeHandle=(event)=>{
      const value=event.target.value
      if(event.target.name === "FavLang"){
          let temp=form.FavLang;
          if (event.target.checked) {
            temp = temp + " " + event.target.value;
          } else {
            temp = temp.replace(event.target.value, "");
          }
          settingState(event, temp);
        }
        //Default
        else {
          settingState(event, value);
        }
      };
      const settingState = (event, value) => {
        setForm({
          ...form,
          [event.target.name]: value,
        });
      };
    const changeImage=(e)=>{
        try {
          setImage(
            URL.createObjectURL(e.target.files[0])
         )
        }
        catch {
          return 0
        }
        
    
      }
    
    const handleChange=(e)=>{
        const target = e.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
    
        const value = target.value;
        const name = target.name;
       
        setForm({
          ...form, //adds values into forms
          [name]: value,
        });

    }
    const handleSubmit = (e) => {
      e.preventDefault();
      setChoice(true);
      //  console.log(myref.current.value)
      console.log(form);
      if(form.password === form.confirmPassword){
        handleChange(e);
      }else{
        alert("password and confrm password are not matched")
      }
    //  if(form.mobile !== "^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$"){
      //  alert("plz enter cnic number in  required pattern")
     // }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="wrapper">
            
            <div className="item">
                <label for="fname">First Name</label><br/>
                <input type="text" id="fname" name="fname" value={form.fname}
                onChange={handleChange}
                />
                <br/><br />
              <span
                style={
                  form.fname === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errFname}
              </span>

                <label for="lname">Last Name</label><br/>
                <input type="text" id="lname" name="lname" 
                value={form.lname}
                onChange={handleChange}
                />
                <br />
              <span
                style={
                  form.lname === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                       // padding: "0px 0px 0px  100px",
                         margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errLname}
              </span>
                <br/>
                <label for="cnic">CNIC Number</label><br/>
                <input type="text" id="cnic" name="cnic" value={form.cnic}
                onChange={handleChange}
                
                />
                <br />
              <span
                style={
                  form.cnic === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errCnic}
              </span>
                <br/>
                <label for="nicdate">NIC Date</label>
                <DateTimePicker
                 onChange={onChange}
                 value={cnicDate}
                 name="cnicDate"
                 id="nicdate"
                 
               />
               <br />
              <span
                style={
                  cnicDate === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errCnicdate}
              </span>
               <br/>
               <label for="mob">Mobile Number</label><br/>
               <input type="text"
                name="mob" value={form.mob}
                onChange={handleChange}
               />
               <br />
              <span
                style={
                  form.mob === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errMobile}
              </span>
<br/>
<label for="">your state/ province.</label>
                       <br />
                <select
                  value={form.province}
                  name="province"
                  onChange={handleChange}
                  className="dropdown"
                >
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option selected value="Balochistan">
                    Balochistan
                  </option>
                  <option value="KPK">KPK</option>
                </select>
                <br />
              <span
                style={
                  form.province === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errProv}
              </span>
                <br />
                
             
            </div>
            <div className="item">
               <div >
                 <label for="file">Please select am image</label>
               </div>
           
<input type="file" onChange={changeImage} name="image" id="file"

/>


  
   <img src={image} width="200px" height="190px" style={image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
   <br />
              <span
                style={
                  image === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errImg}
              </span>
   <br/>
   <label for="email">Email</label>
   <br/>
   <input type="email"
                name="email" value={form.email}
                onChange={handleChange}
               />
               <br />
              <span
                style={
                  form.email === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errEmail}
              </span>
               

   <br/>
   <label for="">select your Games.</label>
                       <br />
                <select
                  value={form.games}
                  name="games"
                  onChange={handleChange}
                  className="dropdown"
                >
                  <option value="Hockey">Hockey</option>
                  <option value="Kricket">Kricket</option>
                  <option selected ="Football">
                    Football
                  </option>
                  <option value="Snooker">Snooker</option>
                </select>
                <br />
              <span
                style={
                  form.games === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errGames}
              </span>
                <br />
   
  

             
            
            </div>
           
        </div>
        <div style={{textAlign:"center",backgroundColor: "#16a085"}}>
        <label>
          <h2>Religions:</h2></label>
        <input
                type="radio"
                value="Islam"
                name="relegion"
                id="rd"
                //  checked={form.relegion === "Islam"}
               onChange={handleChange}
              />
              <label for="rd">islam </label>
              <input
                type="radio"
                value="christian"
                // text={form.relegion}
                name="relegion"
                id="ch"
                // checked={form.relegion === "christian"}
                onChange={handleChange}
              />
              <label for="ch">christian </label>
              <input
                type="radio"
                value="hinduish"
                // text={form.relegion}
                name="relegion"
                id="hindi"
                // checked={form.relegion === "hinduish"}
                onChange={handleChange}
              />
              <label for="hindi">Hunduish </label>
              <input
                type="radio"
                value="budhism"
                id="budh"
                // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleChange}
              />
              <label for="budh">Bushism </label>
              <input
                type="radio"
                value="sikhism"
                // text={form.relegion}
                name="relegion"
                //checked={form.relegion === "budhism"}
                onChange={handleChange}
                id="sikh"
              />
              <label for="sikh">Sikhism </label>
              <input
                type="radio"
                value="aethist"
                // text={form.relegion}
                name="relegion"
                id="auth"
                //checked={form.relegion === "budhism"}
                onChange={handleChange}
              />
              <label for="auth">Authist </label>
              <br />
              <span
                style={
                  form.relegion === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errRel}
              </span>
        </div>
        <div className="wrapper">
          <div className="item">
            <label for="edu">Qualification</label><br/>
            <input type="text"
                name="education" value={form.education}
                onChange={handleChange}
               />
               <br />
              <span
                style={
                  form.education === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errEdu}
              </span>
            
          </div>
          <div className="item">
            <label>Date Of Birth</label><br/>
            <DateTimePicker
        onChange={onChange1}
        value={dob}
        name="dob"
        id="dob"
      />
      <br />
              <span
                style={
                  dob === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errDob}
              </span>

          </div>
        
        </div>
        <div style={{textAlign:"center",backgroundColor: "#16a085"}}>
        <label> <h2>Languages</h2></label>
        <div className="lang" name="favLang" onChange={OnChangeHandle} >
              <ul style={{display:"flex",listStyle:"none",textAlign:"center",margin:"0 20px 0 20px"}}>
              {languages.map((lang) => (
                <div style={{margin:"0 20px 0 20px"}} >
                  <li>
                  <input
                    type="checkbox"
                    value={lang}
                    name="FavLang"
                    // ref={favLangref}
                    // onKeyPress={() => submitEditing(descref)}
                  />
                  <label for={lang}>{lang}</label>
                  </li>
                </div>
              ))}
              </ul>
              <br />
              <span
                style={
                  form.FavLang === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errLang}
              </span>
            </div>
            <br/>
            <br/>
            <label for="desc"><h2>Descrition:</h2></label>
            <textarea
                  name="desc"
                  id="desc"
                  value={form.desc}
                  onChange={handleChange}
                  style={{ width: "70%" ,height:"220px"}}
                />
                <br />
              <span
                style={
                  form.desc === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errDesc}
              </span>
        </div>
        <div className="wrapper">
          <div className="item">
          <label for="pwd">Password</label><br/>
                    <input
                  type="password"
                  id="pwd"
                  name="password"
                  onChange={handleChange}
                  className="password"
                />
                <br />
              <span
                style={
                  form.password === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errPwd}
              </span>
          </div>
          <div className="item">
          <label for="cpwd">Confirm Password</label><br/>
                    <input
                  type="password"
                  id="cpwd"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="password"
                />
                <br />
              <span
                style={
                  form.confirmPassword === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errCpwd}
              </span>
          </div>
        </div>
        <div style={{textAlign:"center", backgroundColor: "#16a085"}}>
      <label><h2>Gender:</h2></label>  
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  id="gn1"
                  //  checked={form.relegion === "Islam"}
                  onChange={handleChange}
                />
                <label for="gn1">Male </label>
                <input
                  type="radio"
                  value="Female"
                  // text={form.relegion}
                  name="gender"
                  id="fm"
                  // checked={form.relegion === "christian"}
                  onChange={handleChange}
                />
                <label for="fm">Female </label>
                <input
                  type="radio"
                  value="others"
                  // text={form.relegion}
                  name="gender"
                  id="others"
                  // checked={form.relegion === "hinduish"}
                  onChange={handleChange}
                />
                <label for="others">others </label>
                <br />
              <span
                style={
                  form.gender === "" && choice === true
                    ? {
                        display: "block",
                        border: "2px solid red",
                        color: "red",
                        width: "40%",
                        margin: "0px 0px 0px  270px",
                        textAlign:"center"
                      }
                    : { display: "none" }
                }
              >
                {error.errGender}
              </span>
                <br/>
                <input type="submit" value="submit data" onClick={openModal}
                       style={{backgroundColor:"green",width:"100%",height:"100px",
                       fontSize: "20px"}}/>
                       

        </div>

        </form>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Submitted Data Successfully</h2>
        <button onClick={closeModal}>close</button>
        <div>
            {
        Object.entries(form).map(([key, value]) => {

return (
<h2>{key} - {value}</h2>
)



})


}
</div>

        
      

      </Modal>
        </>
    )
}
