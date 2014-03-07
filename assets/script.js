// article = [headline, link, author]
// author : true = The Onion, false = not
var articles = [
    ["School Shut Down and Kids Hospitalized After 6th Grade Boys Spray Too Much Axe", "http://newsfeed.time.com/2013/10/31/school-shut-down-and-kids-hospitalized-after-6th-grade-boys-spray-too-much-axe/", false],
    ["McGruff The Crime Dog gets 16 years for having 1,000 pot plants and a grenade launcher", "http://www.philly.com/philly/blogs/trending/McGruff-The-Crime-Dog-gets-16-years-for-having-1000-pot-plants-and-a-grenade-launcher.html", false],
    ["Accused of being gay, Spanish priest challenges Church to measure his anus", "http://freethinker.co.uk/2011/07/12/accused-of-being-gay-spanish-priest-challenges-catholic-church-to-measure-his-anus/", false],
    ["MSNBC interrupts Congresswoman for report on Justin Bieber.", "http://www.trueactivist.com/gab_gallery/msnbc-interrupts-congresswoman-for-report-on-justin-bieber/comment-page-1/", false],
    ["Chinese zoo under fire for disguising hairy dog as a lion", "http://www.timeslive.co.za/world/2013/08/15/chinese-zoo-under-fire-for-disguising-hairy-dog-as-lion", false],
    ["Dennis Rodman asks the leader of North Korea 'to do me a solid' and release captive American Kenneth Bae", "http://blog.foreignpolicy.com/posts/2013/05/07/dennis_rodman_calls_on_kim_jong_un_to_release_american_detainee", false],
    ["Angered By The NSA, But Confused By Acronyms, Brazilian Hacker Defaces NASA Websites", "http://www.techdirt.com/articles/20130918/07151324566/angered-nsas-actions-brazilian-hacker-defaces-nasa-websites.shtml", false],
    ["Toddlers Killed More Americans Than Terrorists Did This Year", "http://www.opposingviews.com/i/society/guns/toddlers-killed-more-americans-terrorists-did-year", false],
    ["Federal Judge: ACLU Can’t Sue NSA Because It Never Should Have Known Anyway", "http://iacknowledge.net/federal-judge-aclu-cant-sue-nsa-because-it-never-should-have-known-anyway/", false],
    ["San Francisco bans helmet cams after they capture firefighters running over Asiana crash victim", "http://www.rawstory.com/rs/2013/08/20/san-francisco-bans-helmet-cams-after-they-capture-firefighters-running-over-asiana-crash-victim/", false],
    ["Burying, Cremating Baby Boomers To Generate $200 Trillion In GDP", "http://www.theonion.com/articles/report-burying-cremating-baby-boomers-to-generate,35454/", true],
    ["Ukrainian-Russian Tensions Dividing U.S. Citizens Along Ignorant, Apathetic Lines", "http://www.theonion.com/articles/ukrainianrussian-tensions-dividing-us-citizens-alo,35428/", true],
    ["Modern Science Still Only Able To Predict One Upcoming Tetris Block", "http://www.theonion.com/articles/modern-science-still-only-able-to-predict-one-upco,35394/", true],
    ["Close-Minded Man Not Even Willing To Hear Out Argument On Why Homosexuality An Abomination", "http://www.theonion.com/articles/closeminded-man-not-even-willing-to-hear-out-argum,35379/", true],
    ["Fourth-Grader Named Jackson To Someday Fire You", "http://www.theonion.com/articles/fourthgrader-named-jackson-to-someday-fire-you,35370/", true],
    ["German Leaders Quietly Confident They Could Pull Off Another Holocaust If They Ever Really Wanted", "http://www.theonion.com/articles/german-leaders-quietly-confident-they-could-pull-o,35345/", true],
    ["So-Called Christian Has Erection", "http://www.theonion.com/articles/socalled-christian-has-erection,35340/", true],
    ["Delighted Health Insurance Executives Gather In Outdoor Coliseum To Watch Patient Battle Cancer", "http://www.theonion.com/articles/delighted-health-insurance-executives-gather-in-ou,35289/", true],
    ["Manic Researchers Announce They Are Hours Away From Cure For Depression", "http://www.theonion.com/articles/manic-researchers-announce-they-are-hours-away-fro,35273/", true],
    ["Nation’s Girlfriends Admit Absolutely Everything Riding On Valentine’s Day", "http://www.theonion.com/articles/nations-girlfriends-admit-absolutely-everything-ri,35270/", true]
    ];

var min = 0;
var max = articles.length - 1;
var random = 0;

// Display the answer
function buttonClick(button)
{
	console.log("button click function called");
    var text = "<a href=\"" + articles[random][1] + "\">";
    if (button == articles[random][2])
    {
        text = text + "CORRECT!</a>";
    }
    else
    {
        text = text + "NOPE!</a>";
    }
    document.getElementById("answer").innerHTML=text;
    document.getElementById("next").style.visibility = "visible";
};

// Continue to the next article
function nextArticle()
{
    random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("headline").innerHTML=articles[random][0];
    document.getElementById("answer").innerHTML="";
    document.getElementById("next").style.visibility = "hidden";
};