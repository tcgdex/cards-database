import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		'fr-fr': "Sonistrelle",
		'en-us': "Noibat",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Darkness"],

		name: {
			'fr-fr': "Tornade",
			'en-us': "Gust",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715627,
				tcgplayer: 497570,
				cardtrader: 248805
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715627,
				tcgplayer: 497570,
				cardtrader: 248805
			}
		},
	],

	illustrator: "chibi",

	description: {
		'en-us': "This Pokémon emits ultrasonic waves from its large ears to search for fruit to eat. It mistakes Applin for its food.",
	},
}

export default card
