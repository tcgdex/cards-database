import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		fr: "Reptincel",
		en: "Charmeleon",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		fr: "Salamèche",
		en: "Charmander",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Fournaise",
			en: "Combustion",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			fr: "Déflagration",
			en: "Fire Blast",
			es: "Llamarada",
			it: "Fuocobomba",
			pt: "Rajada de Fogo",
			de: "Feuersturm"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "GIDORA",

	thirdParty: {
		cardmarket: 733600
	}
}

export default card