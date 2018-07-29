$(() => $('#addtask').click(
    () => $('#todolist').append(
        $('<li>')
        .append(
            $('<span>')
            .text($('#newtask').val())
            .click(
                (e) => $(e.currentTarget).parent().toggleClass('done')
            )
        )
        .append(
            $('<button>')
            .text('X')
            .addClass('btn btn-danger btn-sm')
            .click(
                (e) => $(e.currentTarget).parent().remove()
            )
        )
        .append(
            $('<button>')
            .text('⬇')
            .addClass('btn btn-primary btn-sm')
            .click(
                (e) => $(e.currentTarget).parent().insertAfter(
                    $(e.currentTarget).parent().next()
                )
            )
        )
        .append(
            $('<button>')
            .text('⬆')
            .addClass('btn btn-primary btn-sm')
            .click(
                (e) => $(e.currentTarget).parent().insertBefore(
                    $(e.currentTarget).parent().prev()
                )
            )
        )
    )
)
.click(() => $('#newtask').val(''))
.next().click(
    () => $('.done').remove()
))