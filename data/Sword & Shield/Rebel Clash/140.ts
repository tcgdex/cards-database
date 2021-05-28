import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Zamazenta",
		fr: "Zamazenta"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Rush",
				fr: "Ruée Puissante"
			},
			effect: {
				en: "Flip a coin. If tails, during your next turn, this Pokémon can’t attack.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour."
			},
			damage: 120,

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
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Metal"],
	regulationMark: "D"
}

export default card
