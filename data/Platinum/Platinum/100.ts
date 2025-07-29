import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe",
				fr: "Ça sent le roussi!",
				de: "Super Singe"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Burned."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
				fr: "Boule de feu",
				de: "Flame Ball"
			},
			effect: {
				en: "Move an Energy card attached to Torkoal to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Charcor sur 1 des Pokémon de votre Banc.",
				de: "Move an Energy card attached to Torkoal to 1 of your Benched Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278521
	}
}

export default card
