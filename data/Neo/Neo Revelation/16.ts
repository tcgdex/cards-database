import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
		de: "Celebi"
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
				en: "Psychic Leaf",
				fr: "Psyko herbe",
				de: "Psychic Leaf"
			},
			effect: {
				en: "Flip a coin for each Energy attached to the Defending Pokémon. This attack does 10 damage plus 10 more damage for each heads. Remove a number of damage counters from Celebi equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Celebi has fewer damage counters than that, remove all of them.",
				fr: "Lancez une pièce pour chaque carte Énergie attachée au Pokémon Défenseur. Cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires par face. Retirez à Celebi un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance). Si Celebi a moins de marqueurs de dégâts, retirez-les tous.",
				de: "Flip a coin for each Energy card attached to the Defending Pokémon. This attack does 10 damage plus 10 more damage for each heads. Remove a number of damage counters from Celebi equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Celebi has fewer damage counters than that, remove all of them."
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

	description: {
		fr: "Lorsque Celebi disparaît dans les profondeurs de la forêt, on raconte qu'il laisse derrière lui un œuf qu'il a rapporté du futur."
	},

	thirdParty: {
		cardmarket: 274589,
		tcgplayer: 84142
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

