import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Cauterize",
				fr: "Cautérisation"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’a aucun marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien."
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de Feu"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
