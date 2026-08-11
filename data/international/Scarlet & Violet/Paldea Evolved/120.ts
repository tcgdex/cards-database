import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		'fr-fr': "Selutin",
		'en-us': "Nacli",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Coup d'Boule",
			'en-us': "Headbutt",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715595,
				tcgplayer: 497535,
				cardtrader: 248767
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715595,
				tcgplayer: 497535,
				cardtrader: 248767
			}
		},
	],

	illustrator: "yuu",

	description: {
		'en-us': "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},
}

export default card
