import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Grotle",
		fr: "Boskara",
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		388,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Planting",
				fr: "Plantations",
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie Grass de votre main à 1 de vos Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
