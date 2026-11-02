import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Junglut"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [256],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-feu",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied voltige",
				de: "Turmkick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "Its kicking mastery lets it loose 10 kicks per second. It emits sharp cries to intimidate foes.",
		de: "Es kann 10 Tritte pro Sekunde austeilen. Es gibt schrille Schreie von sich, um Gegner einzuschüchtern."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84412,
				cardmarket: 278466
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278466,
				tcgplayer: 84412
			}
		}
	],

}

export default card
