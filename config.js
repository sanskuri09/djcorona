module.exports = {
        TOKEN: 'OTQyNzc0Njg4NDU3ODUwOTMw.YgpZWQ.kqkQwqwjILKSesXhQcS1SMXqrHc', //your discord bot token
        px: '>',
        playing: 'Sanskuri',

    opt: {
        DJ: {
            enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
            roleName: 'Complain', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
        maxVol: 10000, //You can specify the maximum volume level.
        loopMessage: false, //Please don't touch here!!!
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch 
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }
};
