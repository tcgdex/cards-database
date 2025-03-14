import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		pt: "Pikachu",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Unwind",
				pt: "Descontrair"
			},

			effect: {
				en: "Head 20 damage from this Pokémon.",
				pt: "Causa 20 de dano à cabeça deste Pokémon."
			},
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "I"
}

export default card