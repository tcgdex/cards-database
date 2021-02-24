import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		76,
	],
	hp: 180,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steamroller",
				fr: "Bulldoboule",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 100,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Slam",
				fr: "Tacle Lourd",
			},
			effect: {
				en: "This attack does 20 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 180,

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
