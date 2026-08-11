import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [381],
	set: Set,

	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'es-es': "Latios",
		'it-it': "Latios",
		'pt-br': "Latios",
		'de-de': "Latios"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Luster Purge",
			'fr-fr': "Lumi-Éclat",
			'es-es': "Resplandor",
			'it-it': "Abbagliante",
			'pt-br': "Purga de Esplendor",
			'de-de': "Scheinwerfer"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740565,
				tcgplayer: 523727,
				cardtrader: 265181
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 855026
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740565,
				tcgplayer: 523727,
				cardtrader: 265181
			}
		},
	],

	illustrator: "chibi",

	
}

export default card
