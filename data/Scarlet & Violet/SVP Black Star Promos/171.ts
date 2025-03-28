import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon",
		pt: "Glaceon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],

			name: {
				en: "Permeating Chill",
				pt: "Frio Penetrante",
			},

			effect: {
				en: "At the end of your opponent's next turn, put 9 damage counters on the Defending Pokémon.",
				pt: "Coloque 9 contadores de dano no Pokémon Defensor no final do próximo turno do seu oponente."
			},
		},
		{
			cost: ["Water", "Colorless"],

			name: {
				en: "Icicle Missile",
				pt: "Míssil Gélido",
			},

			damage: "70"
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card