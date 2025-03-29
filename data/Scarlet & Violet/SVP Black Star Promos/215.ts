import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		en: "Toxtricity ex",
		pt: "Toxtricity ex",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],

			name: {
				en: "Strumming Thunder",
				pt: "Dedilhando Trovão"
			},

			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon."
			},

			damage: 240
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