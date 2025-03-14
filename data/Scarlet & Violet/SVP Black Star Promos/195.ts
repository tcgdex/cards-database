import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Clefairy ex",
		pt: "Clefairy ex da Lillie",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fairy Zone",
			pt: "Zona de Fadas",
		},

		effect: {
			en: "The Weakness of each of your opponent's Darkness Pokémon in play is now Psychic. (Apply Weakness as x2.)",
			pt: "A Fraqueza de cada Pokémon Escuridão do seu oponente em jogo agora é Psíquica. (Aplique Fraqueza como x2.)",
		}
	}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],

			name: {
				en: "Full Moon Rondo",
				pt: "Rondó Lua Cheia"
			},

			effect: {
				en: "This attack does 20 more damage for each Benched Pokémon (both your and your opponent's).",
				pt: "Este ataque causa 20 de dano a mais para cada Pokémon no Banco (seu e do seu oponente)."
			},

			damage: "20+"
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],	

	retreat: 1,
	regulationMark: "I"
}

export default card