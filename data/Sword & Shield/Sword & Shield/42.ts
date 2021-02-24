import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
	},
	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		98,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Shower",
				fr: "Aqua-Douche",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Vise Grip",
				fr: "Force Poigne",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
