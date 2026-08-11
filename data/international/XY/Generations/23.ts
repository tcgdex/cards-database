import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Berserker Splash",
				'fr-fr': "Folle Éclaboussure",
			},
			effect: {
				'en-us': "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Tail",
				'fr-fr': "Hydroqueue",
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
	},

	thirdParty: {
		cardmarket: 288463,
		tcgplayer: 113681
	}
}

export default card
