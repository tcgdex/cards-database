import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Magearna",
		fr: "Magearna"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		801,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Entertain",
				fr: "Distraction"
			},
			effect: {
				en: "Heal 40 damage from 1 of your Benched Pokémon.",
				fr: "Soignez 40 dégâts à l'un de vos Pokémon de Banc."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Prismatic Wave",
				fr: "Onde Irisée"
			},
			effect: {
				en: "This attack does 20 damage times the number of different types of Pokémon on your opponent's Bench.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de types de Pokémon différents sur le Banc de votre adversaire."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 295156
	}
}

export default card
