import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [517],
	set: Set,

	name: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
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
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		'en-us': "It eats dreams and releases mist. The mist is pink when it's eating a good dream, and black when it's eating a nightmare."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582644,
				tcgplayer: 253294
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582644,
				tcgplayer: 253294
			}
		},
	],
}

export default card
