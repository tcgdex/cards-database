import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
		de: "Ibitak"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		22,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Wing Attack",
				fr: "Double cru-aile",
				de: "Double Wing Attack"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				de: "Does 20 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirure",
				de: "Rend"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque inflige 50 dégâts.",
				de: "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 20 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 275814,
		tcgplayer: 85394
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
