import * as OfficialTCGPlayer from './official'
import * as Fallback from './fallback'
import type RFC7807 from '../../RFCs/RFC7807'

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

export async function listSKUs(card: { thirdParty: { tcgplayer?: number }}): Promise<any> {
	if ('listSKUs' in source) {
		return (source as any).listSKUs(card)
	}
	return {
		type: '/errors/provider-error',
		title: 'The current provider does not provide this feature',
		status: 503,
		details: 'The TCGPlayer provider does not provide the feature to list SKUs, please contact you administrator to get more informations.'
	} satisfies RFC7807
}
