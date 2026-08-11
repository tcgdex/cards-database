import { Set } from 'models/database/set'
import serie from '../HeartGold & SoulSilver'

const hgss1: Set = {
	id: "hgss1",

	name: {
		'en-us': "HeartGold SoulSilver",
		'fr-fr': "HeartGold SoulSilver",
		'es-es': "HeartGold SoulSilver",
		'it-it': "HeartGold SoulSilver",
		'de-de': "HeartGold SoulSilver",
		'pt-br': "HeartGold SoulSilver"
	},

	serie: serie,
	tcgOnline: "HS",

	cardCount: {
		official: 123
	},

	releaseDate: "2010-02-10",

	abbreviations: {
		official: "HS",
		'fr-fr': "HGS"
	},

	thirdParty: {
		cardmarket: 1566,
		tcgplayer: 1402
	}
}

export default hgss1
