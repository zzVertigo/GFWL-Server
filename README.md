# GFWL-Server
Just a mini emulator for Games For Windows Live Market Place

I provide zero guarantees that I will ever finish this as this is really just one of those boredom projects where I spend about 8 hours grinding to see how far I can get.

That being said I will not be providing instructions on how to set this up or the patches I have done to make the client cooperate with redirection. Figure it out your self lol.

So you might be asking your self.. what does it do so far? Well basically it can authorize a client through Microsoft's pre-existing Passport servers and gets to ReadUserSettings which just provides zone, region, score, titles played, achievements, motto, name, bio, rep etc.. and because the response is incomplete the client crashes with "Failed to retrieve user settings."
