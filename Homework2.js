function startGame()
{
    //استاذ محمد هون امنا الوصلل لعناصر اتش تي ام ل وبدعها هيأنا بالقيم 
    var playerName = document.getElementById('playerName').value;
    var factor = document.getElementById('factor').value;
    var numFields = document.getElementById('numFields').value;
    var operation = document.getElementById('operation').value;
    var gameFields = document.getElementById('gameFields');
    gameFields.innerHTML = '';
    for (var i = 0; i < numFields; i++) 
    {
        var field = document.createElement('input'); //يعني بدي يتم انشاء حقول ادخال ةتحت بقصد انو نوع البيانات نمبر 
        field.type = 'number';
        field.placeholder = 'ادخل الرقم المراد ضربه أو جمعه مع الحقل الاخر'; //استاذ محمد هون نص توضيحي  شان يفهم الي عم بدخل انو عم يدخل النتيجة 
        gameFields.appendChild(field);  //  عندي بال اتش تي ام ال div هون عم قله ضفلي هالجقول على آخر  
    }
}
function calculateScore()
{
    var playerName = document.getElementById('playerName').value;
    var factor = document.getElementById('factor').value;
    var numFields = document.getElementById('numFields').value;
    var operation = document.getElementById('operation').value;

    var gameFields = document.getElementById('gameFields');
    var fields = gameFields.getElementsByTagName('input');

    var correct_answer = 0; // أستاذي بالبرمجه اسمه خزان بعبي القيم وبخزنها فوق بعضا وفق عمليه حسابية  
    var answers_for_user = [];

    for (var i = 0; i < fields.length; i++) // لعند عدد الحقول 
    {
        answers_for_user.push(fields[i].value); // اضفلي اجابات المستخدم على الحقول ضمن مصفوفه كقيم رقمية طبعا مو حيالله ههه
        if (operation === 'addition')
        {
            correct_answer += parseInt(fields[i].value); //عم قله ضيف القيم الي بالحقول على الخزان وجمعهم يا حبيب ونتبه انو يكونوا من نوع انتيجر صحيحات 
        } 
        else if (operation === 'multiplication') 
        {
            if (i === 0) 
            {
                correct_answer = parseInt(fields[i].value); // تعيين القيمة الابتدائية لـ correctAnswer بـ fields[0].value
            } 
            else 
            {
                correct_answer *= parseInt(fields[i].value);
            }
        }
    }   
    //الاجبات الصحيحية برساله تنبيه 
    alert('اللاعب: ' + playerName + '\n'
    + 'النتيجة الصحيحة: ' + correct_answer + '\n'
    + 'الأرقام المدخلة: ' + answers_for_user.join(', '));//بمعنى القيم المدخله في الحقول 
}