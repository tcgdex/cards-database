import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu with Grey Felt Hat",
		pt: "Pikachu com Chapéu de feltro Cinza"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],

			name: {
				en: "Pika-Portrait",
				pt: "Pika-Retrato"
			},

			effect: {
				en: "Search your deck for a Pikachu and put it onto your Bench. Then, shuffle your deck.",
				pt: "Procure por um Pikachu em seu baralho e coloque-o no seu Banco. Em seguida, embaralhe seu baralho."
			},

		}
	],

	retreat: 1,
	regulationMark: "H"
}

export default card