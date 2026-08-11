import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [884],
	set: Set,

	name: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Confront",
			'fr-fr': "Confrontation",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'en-us': "Duralubeam",
			'fr-fr': "Duralurayon",
			'es-es': "Rayoludon",
			'it-it': "Duraluraggio",
			'pt-br': "Duralurraio",
			'de-de': "Duralustrahl"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 841275,
				tcgplayer: 589927
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 841275,
				tcgplayer: 589927
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 794502,
			}
		},
	],

	illustrator: "Tonji Matsuno",

}

export default card
