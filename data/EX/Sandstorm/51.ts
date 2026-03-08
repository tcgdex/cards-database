import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		de: "Igelavar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burning Claw",
				fr: "Griffe brûlante",
				de: "Burning Claw"
			},
			effect: {
				en: "You may discard a Fire Energy card attached to Quilava. If you do, the Defending Pokémon is now Burned.",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Feurisson. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
				de: "You may discard a  Energy card attached to Quilava. If you do, the Defending Pokémon is now Burned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275828,
		tcgplayer: 88482
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
	]
}

export default card
