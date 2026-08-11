import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Bulk Up",
			'fr-fr': "Gonflette"
		},
		effect: {
			'en-us': "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Lors de votre prochain tour, chaque attaque de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
		}
	}, {
		cost: [
			"Fighting",
			"Fighting",
			"Colorless"
		],
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face"
		},
		damage: 60
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	description: {
		'en-us': "They strengthen their bodies by carrying steel beams. They show off their big muscles to their friends."
	},

	retreat: 2,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280077,
				tcgplayer: 98691
			}
		},
	],

}

export default card
