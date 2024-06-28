window.onload = function() {

    const mediaQuery = window.matchMedia('(max-width: 614px)');
    const fieldesetTechNews = document.getElementsByTagName("fieldset")[0];

    const originalFieldsetContent = fieldesetTechNews.cloneNode(true);

    function handleMediaQuery(e) {
        if (e.matches) {
            
            const fieldsetInCellphone = `
            <legend>What are your interests:</legend>

            <label for="Consoles">Consoles</label>
            <input type="checkbox" name="consoles" id="consoles" value="consoles" class="input_ckeckbox">
            
            <label for="cellphone">Cellphone</label>
            <input type="checkbox" name="cellphone" id="cellphone" value="cellphone" class="input_ckeckbox"> <br>

            <label for="computer_laptop">Computer/laptop</label>
            <input type="checkbox" name="computer_laptop" id="computer_laptop" value="computer_laptop" class="input_ckeckbox">

            <label for="peripherals">Peripherals</label>
            <input type="checkbox" name="peripherals" id="peripherals" value="peripherals" class="input_ckeckbox"><br>

            <label for="companies_softwares">Companies and softwares</label>
            <input type="checkbox" name="companies_softwares" id="companies_softwares" value="companies_softwares" class="input_ckeckbox">

            <label for="others">Others</label>
            <input type="checkbox" name="others" id="others" value="others" class="input_ckeckbox">
            `;
            fieldesetTechNews.innerHTML = fieldsetInCellphone;
        }else{
            fieldesetTechNews.innerHTML = originalFieldsetContent.innerHTML;
        }
    }

    handleMediaQuery(mediaQuery);

    mediaQuery.addListener(handleMediaQuery);

}