import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Dig Under",
				fr: "Terrassement",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Trip Over",
				fr: "Croche-pied",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
