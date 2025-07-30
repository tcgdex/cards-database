import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon",
		fr: "Duralugon",
		es: "Duraludon",
		it: "Duraludon",
		pt: "Duraludon",
		de: "Duraludon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			it: "Confronto",
			pt: "Confrontar",
			de: "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "Duralubeam",
			fr: "Duralurayon",
			es: "Rayoludon",
			it: "Duraluraggio",
			pt: "Duralurraio",
			de: "Duralustrahl"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Tonji Matsuno",

	thirdParty: {
		cardmarket: 794502
	}
}

export default card
