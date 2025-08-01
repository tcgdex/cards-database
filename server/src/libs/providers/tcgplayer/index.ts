import * as OfficialTCGPlayer from './official'
import * as Fallback from './fallback'

let source: typeof OfficialTCGPlayer = Fallback
if (
	process.env.TCGPLAYER_CLIENT_ID
	&& process.env.TCGPLAYER_CLIENT_SECRET
	&& process.env.TCGPLAYER_CLIENT_NAME
) {
	console.log('loading official TCGPlayer backend')
	source = OfficialTCGPlayer
} else {
	console.log('loading fallback TCGPlayer backend')
}


export async function updateTCGPlayerDatas(): Promise<boolean> {
	return source.updateTCGPlayerDatas()
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<any> {
	return source.getTCGPlayerPrice(card)
}
