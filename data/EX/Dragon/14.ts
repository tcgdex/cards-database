import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [148],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
		de: "Dratini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de lumière",
				de: "Blendende Explosion"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Wave",
				fr: "Vague guérisseuse",
				de: "Heilungswelle"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Active Pokémon.",
				fr: "Retirez un marqueur de dégât à chacun de vos Pokémon Actifs.",
				de: "Entferne 1 Schadensmarke von allen deinen Aktiven Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84899,
				cardmarket: 275891
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84899,
				cardmarket: 275891
			},
		},
	],

}

export default card
