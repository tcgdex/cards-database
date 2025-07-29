import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
		es: "Volcarona",
		it: "Volcarona",
		pt: "Volcarona",
		de: "Ramoth"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fiery Dance",
				fr: "Danse du Feu",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à 1 de vos Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Wave",
				fr: "Canicule",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280144
	}
}

export default card
