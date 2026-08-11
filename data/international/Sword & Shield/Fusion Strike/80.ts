import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [833],
	set: Set,

	name: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582214,
				tcgplayer: 253234
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582214,
				tcgplayer: 253234
			}
		},
	],
}

export default card
