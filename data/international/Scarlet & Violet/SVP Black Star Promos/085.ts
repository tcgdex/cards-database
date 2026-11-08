import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu with Grey Felt Hat",
		'pt-br': "Pikachu com Chapéu de feltro Cinza"
	},


	illustrator: "Naoyo Kimura",

	rarity: "Promo",
	category: "Pokemon",

	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],

			name: {
				'en-us': "Pika-Portrait",
				'pt-br': "Pika-Retrato"
			},

			effect: {
				'en-us': "Search your deck for a Pikachu and put it onto your Bench. Then, shuffle your deck.",
				'pt-br': "Procure por um Pikachu em seu baralho e coloque-o no seu Banco. Em seguida, embaralhe seu baralho."
			},

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	description: {
		'en-us': "When it is angered, it immediately discharges the energy stored in the pouches of its cheeks.",
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 735302,
				tcgplayer: 518861
			},
		}
	],
}

export default card
