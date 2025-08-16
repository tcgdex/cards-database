import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [585],
	set: Set,

	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		es: "Deerling",
		it: "Deerling",
		pt: "Deerling",
		de: "Sesokitz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			it: "Tonfo",
			pt: "Baque",
			de: "Plumps"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leaf Litter Tackle",
			fr: "Charge Amas de Feuilles",
			es: "Placaje Hojarasca",
			it: "Defogliazione",
			pt: "Joga Folha no Lixo",
			de: "Laubstreu-Tackle"
		},

		effect: {
			en: "Discard a {G} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {G} de ce Pokémon.",
			es: "Descarta 1 Energía {G} de este Pokémon.",
			it: "Scarta un'Energia {G} da questo Pokémon.",
			pt: "Descarte uma Energia {G} deste Pokémon.",
			de: "Lege 1 {G}-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Rond",

	thirdParty: {
		cardmarket: 760646
	}
}

export default card