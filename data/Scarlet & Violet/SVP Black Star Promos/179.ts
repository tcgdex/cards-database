import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Xerneas ex",
		pt: "Xerneas ex",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],

			name: {
				en: "Aurora Beam",
				pt: "Raio Aurora",
			},

			damage: 50
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],

			name: {
				en: "Tidal Surge",
				pt: "Raio Solar",
			},

			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon EX, this attack does 100 more damage.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon EX, este ataque causará 100 pontos de dano a mais."
			},

			damage: "120+"
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card