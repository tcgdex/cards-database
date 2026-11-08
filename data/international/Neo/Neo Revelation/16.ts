import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Psychic Leaf",
				'fr-fr': "Psyko herbe",
				'de-de': "Psychic Leaf"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to the Defending Pokémon. This attack does 10 damage plus 10 more damage for each heads. Remove a number of damage counters from Celebi equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Celebi has fewer damage counters than that, remove all of them.",
				'fr-fr': "Lancez une pièce pour chaque carte Énergie attachée au Pokémon Défenseur. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires par face. Retirez à Celebi un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance). Si Celebi a moins de marqueurs de dégâts, retirez-les tous.",
				'de-de': "Flip a coin for each Energy card attached to the Defending Pokémon. This attack does 10 damage plus 10 more damage for each heads. Remove a number of damage counters from Celebi equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Celebi has fewer damage counters than that, remove all of them."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When Celebi disappears deep in a forest, it is said to leave behind an egg it brought from the future.",
		'fr-fr': "Lorsque Celebi disparaît dans les profondeurs de la forêt, on raconte qu'il laisse derrière lui un œuf qu'il a rapporté du futur."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274589,
				tcgplayer: 84142
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274589,
				tcgplayer: 84142
			}
		}
	]
}

export default card

