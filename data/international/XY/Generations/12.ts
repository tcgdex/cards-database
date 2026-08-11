import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "M Charizard EX",
		'fr-fr': "M-Dracaufeu-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 220,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charizard-EX",
		'fr-fr': "Dracaufeu-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Typhoon",
				'fr-fr': "Typhon Ardent",
			},
			effect: {
				'en-us': "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 50 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		tcgplayer: 113670
	}
}

export default card
