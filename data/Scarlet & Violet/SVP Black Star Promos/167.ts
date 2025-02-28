import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon",
		pt: "Flareon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],

			name: {
				en: "Destructive Flame",
				pt: "Chama Destruidora",
			},

			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente."
			},

			damage: "30"
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],

			name: {
				en: "Fighting Blaze",
				pt: "Luta Labareda",
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