window.onload = function() {

    const mediaQuery = window.matchMedia('(max-width: 433px)');

    const input_group = document.querySelector('.input_group');
    const birthday_box = document.querySelector('.birthday_box');
   
    const originalInput_group = input_group.cloneNode(true);

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

                <div class="input-box-left">
                <label for="address" class="label-address"> Address </label>
                <input class="address" type="text" name="address" id="address" placeholder="type your address">
                </div>

                <div class="input-box-right">
                <label for="state" class="label-state">State</label>
                <select name="state" id="statecell">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                </select>
</div>

`;
            input_group.innerHTML = input_groupInCellphone;
        }else{
            input_group.innerHTML = originalInput_group.innerHTML;
        }
    }

    handleMediaQuery(mediaQuery);

mediaQuery.addListener(handleMediaQuery);
}
