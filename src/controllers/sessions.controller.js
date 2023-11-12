//LOGIN
const authLogin =  async (req, res) => {
    
    if(!req.user)
        return res.status(401).send({status: 'error', message: 'incorrect credentials'});

    req.session.user = {
        name: `${req.user.first_name} ${req.user.last_name}`,
        email: req.user.email,
        age: req.user.age,
        rol: req.user.rol
    }
    res.send({status: 'success', message: 'login success'})
};

const failLogin = async (req, res) => {
    res.status(500).send({status: 'error', message:'login fail'})
 };


const logout = (req, res) =>{
    req.session.destroy(error => {
        if(error) return res.status(500).send({status:'error', error});
        res.redirect('/');
    })
};


//GIT HUB AUTH
const githubAuth = async(req, res) =>{
    res.send({status: 'success', message: 'user registered'});
};
const githubLogin = async(req, res) =>{
    req.session.user = req.user;
    res.redirect('/');
};

//REGISTER
const register = async (req, res) => {

    res.send({ status: 'success', message:' user registered'})
};

const failRegister =  async (req, res) => {
    res.status(500).send({status: 'error', message:'register fail'})
 };

export{
    authLogin,
    logout,
    failLogin,
    githubAuth,
    githubLogin,
    register,
    failRegister
}
