$(document).ready(function() {
    
    $('.post').css('display', 'block');
    
    $('.options').on('click', '.option-item', function(evn) {
        evn.preventDefault();

        $('.option-item').removeClass('active');
        $(this).toggleClass('active');

        var activeButton = $(this).attr('id');
        var activeOption = activeButton.replace('button-', '');
        
        if(activeOption == 'all') {
            $('.note').css('display', 'none');
            $('.post').css('display', 'block');
        } else if (activeOption == 'picture') {
            $('.note').css('display', 'none');
            $('.post').css('display', 'none');
            $('.picture').css('display', 'block');
        } else if (activeOption == 'text') {
            $('.post').css('display', 'none');
            $('.text').css('display', 'block');
        } else {
            alert('Çok fantastik bir hata oluştu! Zamanı geri alıyoruz...');
            window.location.href = 'index.html';
        }

        return false;
    });
    
    $.getJSON( './posts.json', function(data) {
    }).done(function(data) {
        
        var keys = Object.keys(data);
        
        for(i = 0; i < keys.length; i++) {
            postID = keys[i];
            postData = data[postID];
            $('#postContainer').append('<div class="' + postData['type'] + ' post"><a href="https://www.facebook.com/photo.php?fbid=' + postID + '"><div class="wrapper"><img src="posts/' + postID + '.png" /></div></a><div class="credits"><b>Gönderen:</b> <a href="https://www.facebook.com/' + postData['source']['facebook_id'] + '">' + postData['source']['fullname'] + '</a></div></div>');
        }
        
        $('#postContainer').append('<p class="endnote">Her Hakkı erkektir ve erkek adam saklanmaz!<br><a class="bold" href="http://twitter.com/fasoadmn">fa$o admin</a> &amp; <a class="bold" href="http://twitter.com/yanciadmn">yancı admin</a></p>');
    });

});