import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
		de: "Girafarig"
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
				en: "Tail Bite",
				fr: "Morsure de queue",
				de: "Schwanzbiss"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée au Pokémon Défenseur.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an das Verteidigende Pokémon angelegte Energiekarte zu."
			},
			damage: "10+",

		},
	],

	description: {
		fr: "Sa queue a sa vie propre. Elle réagit à ce qui l'entoure. Bon nombre de personnes ne se méfiant pas se sont fait mordre."
	},

	thirdParty: {
		cardmarket: 274718,
		tcgplayer: 85728
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
