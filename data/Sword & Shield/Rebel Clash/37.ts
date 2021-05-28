import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Triple Spin",
				fr: "Triple Tour"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Water"],
	regulationMark: "D"
}

export default card
