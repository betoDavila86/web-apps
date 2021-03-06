function Register(onRegister) {
    Component.call(this, `<section class="register">
    <h2>Register</h2>

    <form class="register__form">
        <input type="text" name="fullname" placeholder="full name" _required>
        <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="password" name="repassword" placeholder="repeat password" required>
        <button>Register</button>
    </form>
</section>`)

    var form = this.container.querySelector('.register__form')

    // form.addEventListener('submit', function(event) { ... })
    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        try {
            onRegister(fullname, email, password, repassword)
        } catch (error) {
            alert(error.message)
        }
    }
}

Register.prototype = Object.create(Component.prototype)
Register.prototype.constructor = Register