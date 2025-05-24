import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		en: "Iono's Kilowattrel",
		pt: "Kilowattrel da Kissera",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flashing Draw",
			pt: "Flashing Draw",
		},

		effect: {
			en: "You may use this Ability once during your turn by discarding a Basic Lightning Energy card from this Pokémon. Draw cards until you have 6 cards in your hand.",
			pt: "Você pode usar esta Habilidade uma vez durante seu turno descartando um card Basic Lightning Energy deste Pokémon. Compre cards até que você tenha 6 cards na sua mão.",
		}
	}],

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],

			name: {
				en: "Mach Bolt",
				pt: "Raio Supersônico",
			},
			
			damage: 70
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "I"
}

export default card