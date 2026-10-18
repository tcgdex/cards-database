import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Slurpuff",
		es: "Slurpuff",
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		685,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Swirlix",
		es: "Swirlix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Lap Up",
				es: "A Lengüetazos",
			},
			effect: {
				en: "Draw 3 cards.",
				es: "Roba 3 cartas.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				es: "Viento Feérico",
			},

			damage: 40,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "The cakes Slurpuff makes always look just like that one Pokémon it likes.",
		es: "Las tartas que hace Slurpuff siempre van decoradas con ese Pokémon que le gusta.",
	},

	thirdParty: {
		tcgplayer: 113762
	}
}

export default card
