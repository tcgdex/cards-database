import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Chansey ex",
		fr: "Leveinard ex",
		de: "Chaneira ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Egg",
				fr: "Oeuf guérisseur",
				de: "Heilendes Ei"
			},
			effect: {
				en: "Remove 2 damage counters (1 if there is only 1) from each of your Pokémon. Remove no damage counters from Chansey ex.",
				fr: "Retirez deux marqueurs de dégât (ou un seul s'il n'y en a qu'un) à chacun de vos Pokémon (sauf à Leveinard Ex).",
				de: "Entferne 2 Schadensmarken (1 falls nur 1 vorhanden ist) von allen deinen Pokémon. Entferne keine Schadensmarken von Chaneira ex."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Austeiler"
			},
			effect: {
				en: "Chansey ex does 60 damage to itself.",
				fr: "Leveinard Ex s'inflige 60 dégâts.",
				de: "Chaneira ex fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		cardmarket: 275744,
		tcgplayer: 84180
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
