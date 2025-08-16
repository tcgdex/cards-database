import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		fr: "Dracaufeu VMAX",
		de: "Glurak VMAX",
		es: "Charizard VMAX",
		pt: "Charizard VMAX",
		it: "Charizard VMAX",
		en: "Charizard VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		fr: "Dracaufeu-V",
		de: "Glurak-V",
		es: "Charizard V",
		pt: "Charizard V",
		it: "Charizard-V",
		en: "Charizard V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Tranch'Griffe",
			de: "Klauenschlitzer",
			es: "Cuchillada Garra",
			pt: "Golpe de Garra",
			it: "Lacerartiglio",
			en: "Claw Slash"
		},

		damage: 100
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"],

		name: {
			fr: "Fournaise G-Max",
			de: "Giga-Feuerflug",
			es: "Gigallamarada",
			pt: "Queimada G-Max",
			it: "Gigavampa",
			en: "G-Max Wildfire"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			en: "Discard 2 Energy from this Pokémon."
		},

		damage: 300
	}],

	retreat: 3,
	regulationMark: "D",

	thirdParty: {
		cardmarket: 674369
	}
}

export default card