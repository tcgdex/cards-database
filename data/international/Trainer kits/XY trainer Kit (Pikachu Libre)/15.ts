import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 2,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118821
	}
}

export default card