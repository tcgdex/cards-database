import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Allure",
			'fr-fr': "Allure",
			'es-es': "Atractivo",
			'it-it': "Affascinante",
			'pt-br': "Fascinar",
			'de-de': "Verlockung"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Lagoon Flight",
			'fr-fr': "Survol du Lagon",
			'es-es': "Vuelo Laguna",
			'it-it': "Volo Lagunare",
			'pt-br': "Sobrevoar a Laguna",
			'de-de': "Lagunenflug"
		},

		damage: 60
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
	regulationMark: "H",

	description: {
		'en-us': "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760697,
				tcgplayer: 542811
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760697,
				tcgplayer: 542811
			}
		},
	],

	illustrator: "Takumi Wada",

}

export default card