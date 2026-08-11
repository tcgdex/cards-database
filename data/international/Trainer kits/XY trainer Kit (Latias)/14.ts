import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,

	description: {
		'en-us': "It can telepathically communicate with people. It changes its appearance using its down that refracts light."
	},

	attacks: [{
		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy"
		},

		damage: 20
	}, {
		name: {
			'en-us': "Psychic Prism",
			'fr-fr': "Prisme Psy"
		},

		damage: "60+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98335
	}
}

export default card