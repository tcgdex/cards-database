import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [520],
	set: Set,

	name: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'es-es': "Pidove",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'de-de': "Dusselgurr"
	},
	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade"
		},
		damage: 20
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Quick Attack",
			'fr-fr': "Vive-Attaque"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires."
		},
		damage: "20+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	description: {
		'en-us': "It can return to its Trainer's location regardless of the distance separating them."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280076,
				tcgplayer: 98714
			}
		},
	],

}

export default card
