window.onload = function() {

    const mediaQuery = window.matchMedia('(max-width: 433px)');

    const input_group = document.querySelector('.input_group');
    const birthday_box = document.querySelector('.birthday_box');
    const originalInput_group = input_group.innerHTML;

    function handleMediaQuery(e) {
        if (e.matches) {

            const input_groupInCellphone = `<div class="new-input-group">
                <div class="input-box-left">
                <label for="name" class="label_name">Name:</label>
                <input type="text" name="name" id="name" placeholder="type your name" required>
                </div>
                
                <div class="input-box-right">
                <label for="lastname" class="label_lastname">Last Name:</label>
                <input type="text" name="lastname" id="lastname" placeholder="type your last name">
                </div>

                <div class="input-box-left">
                <label for="phone" class="label_phone">Phone: </label>
                <input type="tel" name="phone" id="phone" placeholder="(xx) xxxxx-xxxx" class="input_phone">
                </div>

                <div class="input-box-right">
                <label for="email" class="label_email">E-mail:</label>
                <input type="email" name="email" id="email" placeholder="type your email" required>
                </div>

                <div class="input-box-left">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="type your password" required>
                </div>

                <div class="input-box-right">
                <label for="passwordagain" class="label_confirmpassword">Confirm your password:</label>
                <input type="password" name="passwordagain" id="passwordagain" placeholder="Confirm your password" required>
                </div>

               <div class="birthday_box">
                    ${birthday_box.innerHTML}
               </div>
</div>`;
            input_group.innerHTML = input_groupInCellphone;
        }else{
            input_group.innerHTML = originalInput_group;
        }
    }

    handleMediaQuery(mediaQuery);

mediaQuery.addListener(handleMediaQuery);
}