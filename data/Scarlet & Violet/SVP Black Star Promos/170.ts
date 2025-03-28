import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Leafeon",
		pt: "Leafeon",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Leaflet Blessings",
				pt: "Bênçãos das Folhinhas",
			},

			effect: {
				en: "Attach a Basic Grass Energy card from your hand to 1 of your Benched Pokémon. If you do, heal all damage from that Pokémon.",
				pt: "Ligue uma carta de Energia Grama Básica da sua mão a 1 dos seus Pokémon no Banco. Se fizer isso, cure todo o dano daquele Pokémon."
			},
		},
		{
			cost: ["Grass", "Colorless"],

			name: {
				en: "Solar Beam",
				pt: "Raio Solar",
			},

			damage: "70"
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card