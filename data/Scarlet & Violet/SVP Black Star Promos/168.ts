import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Vaporeon",
		pt: "Vaporeon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],

			name: {
				en: "Spiral Drain",
				pt: "Dreno Espiral",
			},

			effect: {
				en: "Heal 30 damage from this Pokémon.",
				pt: "Cure 30 pontos de dano deste Pokémon."
			},

			damage: "30"
		},
		{
			cost: ["Water", "Colorless", "Colorless"],

			name: {
				en: "Fighting Whirlpool",
				pt: "Luta Redemoinho",
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