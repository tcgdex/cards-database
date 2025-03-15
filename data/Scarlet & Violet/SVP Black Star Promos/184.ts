import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		en: "Hop's Snorlax",
		pt: "Snorlax do Hop",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Extra Helpings",
			pt: "Ajudas Extras",
		},

		effect: {
			en: "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.",
			pt: "Ataques usados ​​pelo Pokémon do seu Hop causam 30 a mais de dano ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). O efeito de Ajudas Extras não acumula.",
		}
	}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],

			name: {
				en: "Dynamic Press",
				pt: "Imprensa Dinâmica",
			},

			effect: {
				en: "This Pokemon also does 80 damage to itself.",
				pt: "Este Pokémon também causa 80 de dano a si mesmo."
			},
			
			damage: 140
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "I"
}

export default card