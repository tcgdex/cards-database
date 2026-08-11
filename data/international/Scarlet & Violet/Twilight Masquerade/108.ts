import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		'en-us': "Glimmet",
		'fr-fr': "Germéclat",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rock Shot",
			'fr-fr': "Tir Rocheux",
			'es-es': "Disparo Roca",
			'it-it': "Rocciacolpo",
			'pt-br': "Pedrada",
			'de-de': "Felsschuss"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Glimmet's toxic mineral crystals look just like flower petals. This Pokémon scatters poisonous powder like pollen to protect itself.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769282,
				tcgplayer: 550152
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769282,
				tcgplayer: 550152
			}
		},
	],

	illustrator: "Miki Tanaka",

}

export default card