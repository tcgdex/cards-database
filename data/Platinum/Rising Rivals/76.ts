import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Quagsire GL",
		fr: "Maraiste  Niv. 34",
		de: "Morlord GL"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Submerge",
				fr: "Submerger",
				de: "Untertauchen"
			},
			effect: {
				en: "As long as Quagsire is on your Bench, prevent all damage done to Quagsire by attacks (both yours and your opponent's).",
				fr: "Tant que Maraiste  est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques (de vos Pokémon et des Pokémon de votre adversaire).",
				de: "Solange Morlord GL auf deiner Bank ist, verhindere allen Schaden, der Morlord GL durch Angriffe (deine und die deines Gegners) zugefügt würde."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch and Run",
				fr: "Frapper et partir en courant",
				de: "Schlagen und Rennen"
			},
			effect: {
				en: "You may switch Quagsire with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Maraiste  avec 1 des Pokémon de votre Banc.",
				de: "Du kannst Morlord GL gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
