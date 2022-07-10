function showDropdown2(select) {
    if (select.value == 'PGDegree') {
        $('#PGDegree_Dropdown').show();
        $('#UGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#certificateCourse').hide();
        $('#empty_dropdown1').hide();
    } else if (select.value == 'UGDegree') {
        $('#UGDegree_Dropdown').show().addClass('active');
        $('#empty_dropdown2').show();
        $('#PGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#certificateCourse').hide();
        $('#empty_dropdown1').hide();
        $('#MBA_dropdown').hide();
        $('ExecutiveMBA_dropdown').hide();
        $('#MSCAI_dropdown').hide();
    } else if (select.value == 'oneYear') {
        $('#diplomaCourse').show().addClass('active');;
        $('#empty_dropdown2').show();
        $('#PGDegree_Dropdown').hide();
        $('#UGDegree_Dropdown').hide();
        $('#certificateCourse').hide();
        $('#empty_dropdown1').hide();
        $('#MBA_dropdown').hide();
        $('ExecutiveMBA_dropdown').hide();
        $('#MSCAI_dropdown').hide();
    } else if (select.value == 'sixMonths') {
        $('#certificateCourse').show().addClass('active');;
        $('#empty_dropdown2').show();
        $('#PGDegree_Dropdown').hide();
        $('#UGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#empty_dropdown1').hide();
        $('#PGDegree_Dropdown').hide();
        $('#empty_dropdown1').hide();
        $('#MBA_dropdown').hide();
        $('ExecutiveMBA_dropdown').hide();
        $('#MSCAI_dropdown').hide();
    }
}

function showDropdown3(select) {
    if (select.value == 'MBA') {
        $('#PGDegree_Dropdown').show();
        $('#MBA_dropdown').show().addClass('active');;
        $('#UGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#certificateCourse').hide();
        $('ExecutiveMBA_dropdown').hide();
        $('#MSCAI_dropdown').hide();
        $('#empty_dropdown1').hide();
        $('#empty_dropdown2').hide();

    } else if (select.value == 'ExecutiveMBA') {
        $('#PGDegree_Dropdown').show();
        $('#ExecutiveMBA_dropdown').show().addClass('active');;
        $('#MBA_dropdown').hide();
        $('#UGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#certificateCourse').hide();
        $('#MSCAI_dropdown').hide();
        $('#empty_dropdown1').hide();
        $('#empty_dropdown2').hide();

    } else if (select.value == 'MSAI') {
        $('#PGDegree_Dropdown').show();
        $('#MSCAI_dropdown').show().addClass('active');
        $('#ExecutiveMBA_dropdown').hide();
        $('#MBA_dropdown').hide();
        $('#UGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#certificateCourse').hide();
        $('#empty_dropdown1').hide();
        $('#empty_dropdown2').hide();
    } else if (select.value == 'MSAF') {
        $('#empty_dropdown2').show().addClass('active');
        $('#PGDegree_Dropdown').show().addClass('active');
        $('#ExecutiveMBA_dropdown').hide();
        $('#MBA_dropdown').hide();
        $('#UGDegree_Dropdown').hide();
        $('#diplomaCourse').hide();
        $('#certificateCourse').hide();
        $('#empty_dropdown1').hide();
        $('#MSCAI_dropdown').hide();
    }
}

document.getElementById('dynamicForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if ($('#UGDegree_Dropdown').hasClass('active')) {
        console.log('UG')
        window.location = (document.getElementById('UGDegree_Dropdown').value);
    } else if ($('#diplomaCourse').hasClass('active')) {
        console.log('DC')
        window.location = (document.getElementById('diplomaCourse').value);
    } else if ($('#certificateCourse').hasClass('active')) {
        console.log('CC')
        window.location = (document.getElementById('certificateCourse').value);
    } else if ($('#MBA_dropdown').hasClass('active')) {
        console.log('MBA')
        window.location = (document.getElementById('MBA_dropdown').value);
    } else if ($('#ExecutiveMBA_dropdown').hasClass('active')) {
        console.log('Ex')
        window.location = (document.getElementById('ExecutiveMBA_dropdown').value);
    } else if ($('#MSCAI_dropdown').hasClass('active')) {
        console.log('MS')
        window.location = (document.getElementById('MSCAI_dropdown').value);
    } else if ($('#empty_dropdown2').hasClass('active') && $('#PGDegree_Dropdown').hasClass('active')) {
        console.log('MS')
        window.location = 'm-sc-in-applied-finance.html';
    }
    // window.location = (document.getElementById('UGDegree_Dropdown').value);
})