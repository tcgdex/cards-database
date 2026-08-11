import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "M Venusaur EX",
		'fr-fr': "M-Florizarre-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 230,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venusaur-EX",
		'fr-fr': "Florizarre-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bloom Buster",
				'fr-fr': "Explo Pousse",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: "130+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		tcgplayer: 113660
	}
}

export default card
