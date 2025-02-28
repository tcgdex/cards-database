import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish",
		pt: "Oddish"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],

			name: {
				en: "Razor Leaf",
				pt: "Folha Navalha"
			},

			effect: {
				en: "This attack does 20 damage for each Colorless Energy in your opponent's Active Pokémon Retreat Cost.",
				pt: "Este ataque causará 20 pontos de dano para cada Energia Incolor no custo de Recuo do Pokémon Ativo do seu oponente."
			},

		}
	],

	retreat: 1,
	regulationMark: "H"
}

export default card