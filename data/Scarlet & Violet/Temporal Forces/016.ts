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

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "Deerling have different scents depending on the season. In this form, Deerling have a softly sweet scent that lingers in the nose.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760646,
				tcgplayer: 542678
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760646,
				tcgplayer: 542678
			}
		},
	],

	illustrator: "Rond",

}

export default card