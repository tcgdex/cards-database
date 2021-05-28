import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Eternatus V",
		fr: "Éthernatos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Accelerator",
				fr: "Accélérateur de Puissance"
			},
			effect: {
				en: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie Darkness de votre main à l’un de vos Pokémon de Banc."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamax Cannon",
				fr: "Canon Dynamax"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
