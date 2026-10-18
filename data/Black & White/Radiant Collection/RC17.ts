import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Flabébé",
		es: "Flabébé",
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		669,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				es: "Hoja Afilada",
			},

			damage: 10,
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

	retreat: 1,

	description: {
		en: "It's OK. No one will take away your flower. You look cute even when you're angry.",
		es: "No pasa nada. Nadie te va a quitar tu flor. Estás linda hasta cuando te enfadas.",
	},

	thirdParty: {
		tcgplayer: 113759
	}
}

export default card
