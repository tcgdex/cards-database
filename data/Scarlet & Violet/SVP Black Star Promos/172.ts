import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon",
		pt: "Sylveon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],

			name: {
				en: "Mystical Return",
				pt: "Retorno Místico",
			},

			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck.",
				pt: "Jogue uma moeda. Se sair cara, escolha 1 dos Pokémon no bancodo seu oponente. Embaralhe aquele Pokémon e todas as cartas ligadas a ele no baralho dele."
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],

			name: {
				en: "Disarming Voice",
				pt: "Voz Desarmante",
			},

			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso."
			},

			damage: "90"
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card