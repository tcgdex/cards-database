import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		'en-us': "Falinks",
		'fr-fr': "Hexadron",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		'en-us': "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Invade",
			'fr-fr': "Envahissement",
			'de-de': "Einmarschieren",
			'es-es': "Invadir",
			'pt-br': "Invadir",
			'it-it': "Scorreria"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582783,
				tcgplayer: 253369
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582783,
				tcgplayer: 253369
			}
		},
	],
}

export default card
