import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [608],
	set: Set,

	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Burn It All Up",
			'fr-fr': "Combustion Totale",
			'es-es': "Carbonizar",
			'it-it': "Fiamma Estrema",
			'pt-br': "Queimar Tudo",
			'de-de': "Alles abbrennen"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The spirits it absorbs fuel its baleful fire. It hangs around hospitals waiting for people to pass on.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769211,
				tcgplayer: 550081
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769211,
				tcgplayer: 550081
			}
		},
	],

	illustrator: "Rond",

}

export default card