import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Darkness"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
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
			type: 'holo',
			thirdParty: {
				cardmarket: 751733,
				tcgplayer: 535155,
				cardtrader: 274379
			}
		},
	],

	illustrator: "Nelnal",

	description: {
		'en-us': "This Pokémon emits ultrasonic waves from its large ears to search for fruit to eat. It mistakes Applin for its food.",
	},

}

export default card
