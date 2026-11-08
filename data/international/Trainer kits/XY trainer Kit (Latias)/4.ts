import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic"
		},

		damage: 10
	}, {
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque"
		},

		damage: "10+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	hp: 50,
	types: ["Colorless"],
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98329
	}
}

export default card