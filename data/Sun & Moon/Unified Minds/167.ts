import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},
	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		287,
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
				en: "Lazy Howl",
				fr: "Hurlement Paresseux",
			},
			effect: {
				en: "During your opponent's next turn, if they attach an Energy card from their hand to the Defending Pokémon, their turn ends.",
				fr: "Pendant le prochain tour de votre adversaire, s’il attache une carte Énergie de sa main au Pokémon Défenseur, son tour se termine.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hang Down",
				fr: "Suspension",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
