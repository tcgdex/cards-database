import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [536],
	set: Set,

	name: {
		'fr-fr': "Batracné",
		'en-us': "Palpitoad",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Tritonde",
		'en-us': "Tympole",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Pluie Éclaboussante",
			'en-us': "Rain Splash",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "On occasion, their cries are sublimely pleasing to the ear. Palpitoad with larger lumps on their bodies can sing with a wider range of sounds.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725131,
				tcgplayer: 509794,
				cardtrader: 255611
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725131,
				tcgplayer: 509794,
				cardtrader: 255611
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
