import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Healer",
				fr: "Guérisseur d'énergie",
			},
			effect: {
				en: "Whenever you attach an Energy card from you hand to 1 of your Pokémon, remove 1 damage counter from that Pokémon.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à Onix, retirez-lui 1 marqueur de dégât.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Boundless Power",
				fr: "Puissance illimitée",
			},
			effect: {
				en: "Onix can’t attack during your next turn.",
				fr: "Pendant votre prochain tour, Onix ne peut pas attaquer.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
