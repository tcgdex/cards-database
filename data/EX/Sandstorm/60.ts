import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
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
				fr: "Frappe et cours"
			},
			effect: {
				en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward. You may switch Dunsparce with 1 of your Benched Pokémon.",
				fr: "Choisissez dans votre deck jusqu'à trois Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck. Vous pouvez échanger Insolourdo contre un des Pokémon de votre Banc."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Flash",
				fr: "Flash surprise"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Paralysé."
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





}

export default card
