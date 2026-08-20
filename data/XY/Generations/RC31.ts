import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "M Gardevoir EX",
		fr: "M-Gardevoir-EX",
		de: "M-Guardevoir-EX"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 210,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
		de: "M-Guardevoir-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brilliant Arrow",
				fr: "Flèche Éclatante",
				de: "Glänzender Pfeil"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Fairy attachées à tous vos Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der an all deinen Pokémon angelegten {FAIRY}-Energien zu."
			},
			damage: "30×",

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



}

export default card
