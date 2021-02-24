import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Négapi",
	},
	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		312,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collecte",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spark",
				fr: "Étincelle",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
