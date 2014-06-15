function getQuiz() {
    var quizSource = "";

    //Quiz definition
    quizSource = '{"title" : "';

    //Quiz title
    quizSource += "Quiz";

    quizSource += '",';
    quizSource += '"questions" : [';
    quizSource += '{   "text" : "';

    //Question #1
    quizSource += "Choose a color";

    quizSource += '",';
    quizSource += '        "options" : [{';
    quizSource += '            "text" : "';

    //Question #1. Option #1 Text
    quizSource += "Yellow";

    quizSource += '",';
    quizSource += '            "image" : "';

    //Question #1. Option #1 Image
    quizSource += "http://www.clker.com/cliparts/b/2/q/x/Z/N/yellow-square-md.png";

    quizSource += '"';
    quizSource += '        },{';
    quizSource += '            "text" : "';

    //Question #1. Option #2 Text
    quizSource += "Pink";

    quizSource += '",';
    quizSource += '            "image" : "';

    //Question #1. Option #2 Image
    quizSource += "http://www.clker.com/cliparts/a/1/C/x/k/E/pink-square-md.png";

    quizSource += '"';
    quizSource += '        },{';
    quizSource += '            "text" : "';

    //Question #1. Option #3 Text
    quizSource += "Red";

    quizSource += '",';
    quizSource += '            "image" : "';

    //Question #1. Option #3 Image
    quizSource += "http://www.clker.com/cliparts/U/D/B/J/j/R/red-square-md.png";

    quizSource += '"';
    quizSource += '        },{';
    quizSource += '            "text" : "White",';
    quizSource += '            "image" : "http://www.clker.com/cliparts/q/O/Q/b/C/N/white-square-md.png"';
    quizSource += '        },{';
    quizSource += '            "text" : "Purple",';
    quizSource += '            "image" : "http://www.clker.com/cliparts/f/T/D/A/b/W/purple-square-md.png"';
    quizSource += '        }]';
    quizSource += '    },{   "text" : "Choose a vase",';
    quizSource += '        "options" : [{';
    quizSource += '            "text" : "Vase 1",';
    quizSource += '            "image" : "https://nebula.wsimg.com/43ec95dca1815b9906305a0559f06dba?AccessKeyId=A0E172F17FE20A4C4E55&disposition=0&alloworigin=1"';
    quizSource += '        },{';
    quizSource += '            "text" : "Vase 2",';
    quizSource += '            "image" : "https://nebula.wsimg.com/d7d9de3f9bfe2d82016ca2fad677611e?AccessKeyId=A0E172F17FE20A4C4E55&disposition=0&alloworigin=1"';
    quizSource += '        },{';
    quizSource += '            "text" : "Vase 3",';
    quizSource += '            "image" : "https://nebula.wsimg.com/c584696d2b80f9b66ab787d31a588493?AccessKeyId=A0E172F17FE20A4C4E55&disposition=0&alloworigin=1"';
    quizSource += '        },{';
    quizSource += '            "text" : "Vase 4",';
    quizSource += '            "image" : "https://nebula.wsimg.com/29b80b6ee7d1b05902eeb66e7ec29db4?AccessKeyId=A0E172F17FE20A4C4E55&disposition=0&alloworigin=1"';
    quizSource += '        },{';
    quizSource += '            "text" : "Vase 5",';
    quizSource += '            "image" : "https://nebula.wsimg.com/e6d311974372c91903c61b9ed76184d1?AccessKeyId=A0E172F17FE20A4C4E55&disposition=0&alloworigin=1"';
    quizSource += '        }]';
    quizSource += '    },{   "text" : "Choose a breed",';
    quizSource += '        "options" : [{';
    quizSource += '            "text" : "Collie",';
    quizSource += '            "image" : "http://a1.cdnsters.com/static/images/dogster/breeds/collie.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Irish Setter",';
    quizSource += '            "image" : "http://www.cleversett.com/wp-content/uploads/2014/02/irish-setter-laying-down.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Corgie",';
    quizSource += '            "image" : "http://2.bp.blogspot.com/-xCFB6w4dFfo/UMiC97DM_BI/AAAAAAAAA38/OFzf3xnQJ3g/s1600/Pembroke+Welsh+Corgi+Dog04.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Afgan",';
    quizSource += '            "image" : "http://media.web.britannica.com/eb-media/14/28814-004-CE5E3CC5.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Poodle",';
    quizSource += '            "image" : "http://4.bp.blogspot.com/-kaOuG9_LoXw/ToJat8_AHxI/AAAAAAAACYE/ElD2fqFP6Ag/s1600/black-poodle%25281%2529.jpg"';
    quizSource += '        }]';
    quizSource += '    },{   "text" : "Choose a chair",';
    quizSource += '        "options" : [{';
    quizSource += '            "text" : "Stuffed Chair",';
    quizSource += '            "image" : "http://f00.inventorspot.com/images/stuffed-chair.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Queen Anne",';
    quizSource += '            "image" : "http://www.mfordcreech.com/GlassPagesImages/QueenAnneCubanMahgoSideChair1b.JPG"';
    quizSource += '        },{';
    quizSource += '            "text" : "Danish Modern",';
    quizSource += '            "image" : "http://shard1.1stdibs.us.com/archivesE/upload/9473/50_12/IMG2052/XXX_IMG_2052.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Art Nouveau",';
    quizSource += '            "image" : "http://classconnection.s3.amazonaws.com/300/flashcards/2617300/jpg/charles_rennie_mackintosh_hillhouse_chair_rfd1359665224525.jpg"';
    quizSource += '        },{';
    quizSource += '            "text" : "Bistro Chair",';
    quizSource += '            "image" : "http://www.big-georges.com/productimages/meadowcraft/2007/DeluxeBistroChair.jpg"';
    quizSource += '        }]';
    quizSource += '    }],';
    quizSource += '    "outcomes" : [{';
    quizSource += '        "text" : "Sunflower",';
    quizSource += '        "image" : "http://imavex.vo.llnwd.net/o18/clients/urbanfarm/images/Annual_Flowers/Sunflower.jpg"';
    quizSource += '    },{';
    quizSource += '        "text" : "Rose",';
    quizSource += '        "image" : "http://www.wallpick.com/wp-content/uploads/2014/03/01/a_red_rose_for_you-640x480.jpg"';
    quizSource += '    },{';
    quizSource += '        "text" : "Tulip",';
    quizSource += '        "image" : "http://bestclipartblog.com/clipart-pics/tulip-clip-art-1.jpg"';
    quizSource += '    },{';
    quizSource += '        "text" : "Lily",';
    quizSource += '        "image" : "http://akvis.com/img/examples/coloriage/lily-gallery/lily-bw.jpg"';
    quizSource += '    },{';
    quizSource += '        "text" : "Lilac",';
    quizSource += '        "image" : "http://www.brooksmountainsoap.com/wp-content/uploads/2013/11/lilac_flowers-10343.jpg"';
    quizSource += '    }]';
    quizSource += '}';

    return quizSource;
}


//DO NOT CHANGE BELOW THIS LINE
var selections = new Array();
var quiz = null;

  //Get quiz data, change to callout
  quiz = $.parseJSON(getQuiz());

$('#quiz').hide();
    //Parse quiz and build UI
  $('#quiz').append('<div class="quiz_title">' + quiz.title + '</div>');
  for(i in quiz.questions) {
        selections[i] = 0;
        var question = quiz.questions[i];
        var questionNum = parseInt(i) + 1;
        $('#quiz').append(question.text);
    
        var select = $('<select class="image-picker">');
        select.append('<option value=""></option>');
        for(j in question.options) {
            var option = question.options[j];
            var optionNum = parseInt(j) + 1;
            select.append('<option data-img-src="' + option.image + '" value="' + optionNum + '">' + option.text + '</option>');
        
        }
        $('#quiz').append(select);
        $('#quiz').append("<p>");
  }
  var outcome = $('<div id="outcome">');
  outcome.append($('<img id="outcome_image">'));
  outcome.append($('<div id="outcome_caption">'));
  outcome.hide();
  $('#quiz').append(outcome);

function configureImagePickers() {
    alert(jQuery.length);
    var jq = jQuery;
    if(jQuery.length > 1)
        jq = jQuery[1];
  //Configure ImagePickers
  jq(".image-picker").imagepicker({
                                          show_label:  true,
                                          clicked: clickedEvent
                                          });
    $('#quiz').show();
}
$(function() {
window.setTimeout(function() { configureImagePickers(); }, 0);
});

  //Event handling
function clickedEvent(e) {
    var pickers = $(".image-picker");
    
    for(i in e.picker.picker_options) {
        var picker_option = e.picker.picker_options[i];
        
        var option = picker_option.option[0];
        //Select choice
        if(e.option[0].selected) {
            if(option == e.option[0]) {
                //Capture selection
                selections[pickers.index(e.picker.select)] = parseInt(e.option[0].value);
            }
            else {
                //Disable all other options
                picker_option.node.find(".thumbnail").addClass("disabled");
                picker_option.node.find(".thumbnail").unbind("click");
            }
        }
        //Unselect choice
        else {
            picker_option.node.find(".thumbnail").removeClass("disabled");
            picker_option.node.find(".thumbnail").click({
                                                        option: picker_option
                                                        }, function(event) {
                                                        return event.data.option.clicked();
                                                        });
            selections[pickers.index(e.picker.select)] = 0;
        }
    }
    
    processSelections();
}

//Process selected items
function processSelections() {
    
    var quizFinished = true;   //Only when all selections have been made
    var selectedOutcomes = new Array();
    for(i in quiz.outcomes) {
        selectedOutcomes[i] = 0;
    }
    for(i in selections) {
        if(selections[i] == 0)
            quizFinished = false;
        else
            selectedOutcomes[selections[i] - 1] = selectedOutcomes[selections[i] - 1] + 1;
    }
    if(!quizFinished) {
        $('#outcome').hide();
        return;
    }
    
    //Calculate final outcome
    var selectedOutcome = 0;
    var highScore = -1;
    var tiebreaker = 0;
    for( i in selectedOutcomes) {
        if(selectedOutcomes[i] > highScore) {
            highScore = selectedOutcomes[i];
            tiebreaker = 0;
            selectedOutcome = i;
        }
        else if (selectedOutcomes[i] == highScore) {
            tiebreaker = tiebreaker + 1;
        }
    }
    
    var outcome = "";
    if(tiebreaker > 0) {
        var index = Math.floor(Math.random() * (tiebreaker + 1));
        for(i in selectedOutcomes) {
            if(selectedOutcomes[i] == highScore) {
                index = index - 1
                if(index < 0)
                    selectedOutcome = i;
            }
        }
    }
    $('#outcome_image').attr("src", quiz.outcomes[selectedOutcome].image);
    $('#outcome_caption').text("You are a " + quiz.outcomes[selectedOutcome].text);
    $('#outcome').show();
}

