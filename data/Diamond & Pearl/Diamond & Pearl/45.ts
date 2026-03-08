import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
		de: "Kinoso"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Worry Seed",
				fr: "Soucigraine",
				de: "Sorgensamen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuillemagik",
				de: "Zauberblatt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and remove 3 damage counters from Cherrim.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires et retirez à Ceriflor 3 marqueurs de dégât.",
				de: "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu und entferne 3 Schadensmarken von Kinoso."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il fleurit lorsque le soleil est au beau fixe. Il cherche à prendre sa revanche sur une vie de bourgeon."
	},

	thirdParty: {
		cardmarket: 277544,
		tcgplayer: 84251
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
