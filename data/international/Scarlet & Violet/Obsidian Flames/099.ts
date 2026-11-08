import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		'fr-fr': "Toutombe",
		'en-us': "Greavard",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Ronge",
			'en-us': "Gnaw",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Tir Effrayant",
			'en-us': "Spooky Shot",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 20
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
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It is said that a dog Pokémon that died in the wild without ever interacting with a human was reborn as this Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725179,
				tcgplayer: 509933,
				cardtrader: 255784
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725179,
				tcgplayer: 509933,
				cardtrader: 255784
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
