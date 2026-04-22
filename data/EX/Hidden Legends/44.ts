import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Metang",
		de: "Metang"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Levitate",
				fr: "Lévitation",
				de: "Levitate"
			},
			effect: {
				en: "If Metang has any Energy attached to it, Metang's Retreat Cost is 0.",
				fr: "Si Metang possède des Énergies, son Coût de Retraite est de 0.",
				de: "If Metang has any Energy attached to it, Metang's Retreat Cost is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276095,
		tcgplayer: 87373
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
