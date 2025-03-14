import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Feraligatr",
		pt: "Feraligatr",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Water", "Water", "Colorless"],

			name: {
				en: "Deep Submergence",
				pt: "Submersão profunda"
			},

			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
				pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e efeitos de ataques feitos a este Pokémon."
			},

			damage: 140
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],	

	retreat: 3,
	regulationMark: "I"
}

export default card