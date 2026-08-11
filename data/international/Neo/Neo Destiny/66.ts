import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Bite",
				'fr-fr': "Morsure de queue",
				'de-de': "Schwanzbiss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energiekarte zu."
			},
			damage: "10+",

		},
	],

	retreat: 1,

	description: {
		'en-us': "Its tail has a brain of its own, which can respond to stimuli such as scents. Many unsuspecting people have been bitten by it.",
		'fr-fr': "Sa queue a sa vie propre. Elle réagit à ce qui l'entoure. Bon nombre de personnes ne se méfiant pas se sont fait mordre."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274718,
				tcgplayer: 85728
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274718,
				tcgplayer: 85728
			}
		}
	]
}

export default card
