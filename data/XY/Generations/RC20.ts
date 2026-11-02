import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		de: "Sabbaione"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [684],

	dexId: [
		685,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
		de: "Flauschling"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Lap Up",
				fr: "Gobeur",
				de: "Auflecken"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				de: "Ziehe 3 Karten."
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
				fr: "Vent Féérique",
				de: "Feenbrise"
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
		de: "Die Kuchen, die Sabbaione backt, sehen immer wie das Pokémon aus, das es so gerne mag."
	},

	thirdParty: {
		cardmarket: 288529
	}
}

export default card
