import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		291,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cast-off Shell",
				fr: "Coquille Libérante",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez chercher Munja dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Night Slash",
				fr: "Tranche-Nuit",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
