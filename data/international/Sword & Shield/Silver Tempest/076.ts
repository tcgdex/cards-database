import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'es-es': "Solosis",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'de-de': "Monozyto"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
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
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It communicates with others telepathically. Its body is encapsulated in liquid, but if it takes a heavy blow, the liquid will leak out.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682123,
				tcgplayer: 451730
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682123,
				tcgplayer: 451730
			}
		},
	],
}

export default card
