$(document).ready(function(){

  $('body').on('click','#message-is-post',function(){
    $('#new-message')[0].innerHTML = "border_color"
    $('#message-text').attr("id","post-text")
    $('#message-is-post')[0].innerHTML = "Message"
    $('#message-is-post').attr("id","message-is-message")
  })

  $('body').on('click','#message-is-message',function(){
    postToMessage()
  })

  $('body').on('click','#new-comment',function(){
    clearInterval(store.intervalId)
  })

  $('body').on('click', '#add-new-comment',function(){
    let commentText = $('#new-comment').val()
    let messageId = parseInt($(this).closest('.container')[0].dataset.id)
    $.ajax({
      url: `http://localhost:3000/messages/${messageId}/comment`,
      method: "POST",
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({text: commentText, currentUser: store.currentUser})
    }).then(function(){
      listenForNewMessages()
    })
  })


})

function postToMessage(){
  $('#new-message')[0].innerHTML = "chat_bubble_outline"
  $('#post-text').attr("id","message-text")
  $('#message-is-message')[0].innerHTML = "Post"
  $('#message-is-message').attr("id","message-is-post")
}
