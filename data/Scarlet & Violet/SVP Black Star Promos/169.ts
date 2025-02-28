import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon",
		pt: "Jolteon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],

			name: {
				en: "Linear Attack",
				pt: "Ataque Linear",
			},

			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
			},
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],

			name: {
				en: "Fighting Lightning",
				pt: "Luta Relâmpago",
			},

			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon EX or Pokémon V, this attack does 90 more damage.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon EX ou um Pokémon V, este ataque causará 90 pontos de dano a mais."
			},

			damage: "90+"
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card