import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [23],

	name: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tail Snap",
				fr: "Coud' Queue Sec",
				es: "Pinza Cola",
				it: "Schioccacoda",
				pt: "Surpresa de Cauda",
				de: "Schweifhieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints."
	},

	thirdParty: {
		cardmarket: 500020,
		tcgplayer: 223025
	}
}

export default card
