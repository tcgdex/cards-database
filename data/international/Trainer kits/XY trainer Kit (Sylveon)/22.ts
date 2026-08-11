import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	dexId: [676],
	set: Set,

	name: {
		'en-us': "Furfrou",
		'fr-fr': "Couafarel",
		'es-es': "Furfrou",
		'it-it': "Furfrou",
		'pt-br': "Furfrou",
		'de-de': "Coiffwaff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 97987
	}
}

export default card