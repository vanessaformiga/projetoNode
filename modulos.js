const os = require('os');

setInterval(() => {
    const { platform, arch, totalmem, freemem } = os;
    const ram = totalmem() / 1024 / 1024;
    const fram = freemem() / 1024 / 1024;
    const usage = (fram / ram) * 100;

    const stats = {

        OS: platform(),
        Arch: arch(),
        Ram: parseInt(ram),
        Fram: parseInt(fram),
        Usage: `${usage.toFixed(2)}%`
    }

    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);