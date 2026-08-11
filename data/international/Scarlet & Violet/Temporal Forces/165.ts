import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [585],
	set: Set,

	name: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'es-es': "Deerling",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'de-de': "Sesokitz"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Leaf Litter Tackle",
			'fr-fr': "Charge Amas de Feuilles",
			'es-es': "Placaje Hojarasca",
			'it-it': "Defogliazione",
			'pt-br': "Joga Folha no Lixo",
			'de-de': "Laubstreu-Tackle"
		},

		effect: {
			'en-us': "Discard a {G} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {G} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {G} de este Pokémon.",
			'it-it': "Scarta un'Energia {G} da questo Pokémon.",
			'pt-br': "Descarte uma Energia {G} deste Pokémon.",
			'de-de': "Lege 1 {G}-Energie von diesem Pokémon auf deinen Ablagestapel."
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
		'en-us': "Deerling have different scents depending on the season. In this form, Deerling have a softly sweet scent that lingers in the nose.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760795,
				tcgplayer: 542886
			}
		},
	],

	illustrator: "Susumu Maeya",

}

export default card