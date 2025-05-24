import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [382],
	set: Set,

	name: {
		en: "Kyogre ex",
		pt: "Kyogre ex",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],

			name: {
				en: "Winding Waves",
				pt: "Ondas Sinuosas",
			},

			effect: {
				en: "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent choose the new Active Pokémon.)",
				pt: "Você pode mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
			},
			
			damage: 80
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				en: "Tidal Surge",
				pt: "Raio Solar",
			},

			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon."
			},

			damage: 230
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "H"
}

export default card