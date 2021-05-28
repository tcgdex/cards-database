import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Garbodor",
		fr: "Miasmax"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trash Cyclone",
				fr: "Cyclone Immonde"
			},
			effect: {
				en: "This attack does 30 damage for each Pokémon Tool card in your discard pile. Then, shuffle those cards into your deck.",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck."
			},
			damage: "30×",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Spray",
				fr: "Pulvérisation Toxique"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
