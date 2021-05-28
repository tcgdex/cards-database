import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Head Crack",
				fr: "Fracture Crânienne"
			},
			effect: {
				en: "Choose 1 of your opponent’s Active Pokémon’s attacks. During your opponent’s next turn, that Pokémon can’t use that attack.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
