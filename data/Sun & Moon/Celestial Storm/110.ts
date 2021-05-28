import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		206,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Strike and Run",
				fr: "Frappe et Cours",
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, you may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Cherchez jusqu’à 3 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. Si vous avez placé un Pokémon sur votre Banc de cette façon, vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Flash",
				fr: "Flash Surprise",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
