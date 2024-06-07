import QRCode from 'qrcode';

const sourceLinks = [
    "https://www.youtube.com/@codeorg",
    "https://www.youtube.com/@CoderbyteDevelopers",
    "https://www.youtube.com/@Codesmith",
    "https://www.youtube.com/@craigndave",
    "https://www.youtube.com/@decomplexify",
    "https://www.youtube.com/@Fireship",
    "https://www.youtube.com/@freecodecamp",
    "https://www.youtube.com/@funfunfunction",
    "https://www.youtube.com/@KevinPowell",
    "https://www.youtube.com/@NetNinja",
    "https://www.youtube.com/@TraversyMedia",
    "https://www.youtube.com/@WesBos"
]

const getChannelName = (link) => {
    const splitLink = link.split('@');
    return splitLink[1]

}

const generateOneCode = (link) => {
    const channelName = getChannelName(link);
    console.log("generating QR code for: ", link);
    
    return QRCode.toFile(`./outputImages/qrcode_${channelName}.png`, link)
}



const generateQRCodes = async (sourceLinks) => {
    for (const link of sourceLinks){
        await generateOneCode(link)
    }
}

generateQRCodes(sourceLinks)

/*
FOr each URL in the source URLs
    generateCode with the information: target filename, format, 



*/