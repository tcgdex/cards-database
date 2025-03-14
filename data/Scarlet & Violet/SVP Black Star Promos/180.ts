import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Dialga ex",
		pt: "Dialga ex",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal"],

			name: {
				en: "Time Bellow",
				pt: "Bramido Temporal",
			},

			effect: {
				en: "Drawm a card.",
				pt: "Compre uma carta."
			},
			
			damage: 20
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],

			name: {
				en: "Metal Blast",
				pt: "Explosão de Metal",
			},

			damage: "100+",
			
			effect: {
				en: "This attack does 20 more damage for each Metal Energy attached to this Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Energia de Metal ligada a este Pokémon."
			}
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
	regulationMark: "H"
}

export default card