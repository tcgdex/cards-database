import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [931],
	set: Set,

	name: {
		'en-us': "Squawkabilly",
		'fr-fr': "Tapatoès",
		'es-es': "Squawkabilly",
		'de-de': "Krawalloro",
		'it-it': "Squawkabilly",
		'pt-br': "Squawkabilly",
		'es-mx': "Squawkabilly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Add On",
			'fr-fr': "Ajout",
			'es-es': "Sumar",
			'de-de': "Hinzufügen",
			'it-it': "Supplemento",
			'pt-br': "Adicionar",
			'es-mx': "Acarrear"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'es-es': "Vozarrón",
			'de-de': "Schallwelle",
			'it-it': "Granvoce",
			'pt-br': "Hipervoz",
			'es-mx': "Hipervoz"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	illustrator: "sowsow",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817293,
				tcgplayer: 623568
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817293,
				tcgplayer: 623568
			}
		},
	],
}

export default card
