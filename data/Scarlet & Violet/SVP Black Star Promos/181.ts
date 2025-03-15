import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		en: "N's Darmanitan",
		pt: "Darmanitan do N",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],

			name: {
				en: "Back Draft",
				pt: "Bramido Temporal",
			},

			effect: {
				en: "This attack does 30 damage for each Basic Energy card in your opponent's discard pile.",
				pt: "Este ataque causa 30 de dano para cada carta de Energia Básica na pilha de descarte do seu oponente."
			},
			
			damage: "30x"
		},
		{
			cost: ["Fire", "Fire", "Colorless"],

			name: {
				en: "Flamebody Cannon",
				pt: "Canhão Flamejante",
			},

			damage: 90,
			
			effect: {
				en: "Discard all Energy from this Pokémon. This attack also does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				pt: "Descarte toda a Energia deste Pokémon. Este ataque também causa 90 de dano a 1 dos Pokémon do Banco do seu oponente. (Não aplique Fraqueza e Resistência para Pokémon do Banco.)"
			}
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "I"
}

export default card