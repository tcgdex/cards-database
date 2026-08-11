import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou",
		'es-es': "Greedent",
		'de-de': "Schlaraffel",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'es-mx': "Greedent"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'de-de': "Raffel",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'es-mx': "Skwovet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gluttonous Tail",
			'fr-fr': "Queue Gourmande",
			'es-es': "Cola Codiciosa",
			'de-de': "Gefräßiger Schweif",
			'it-it': "Coda Vorace",
			'pt-br': "Cauda Gulosa",
			'es-mx': "Cola Glotona"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'de-de': "Ziehe 2 Karten.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Jerky",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817284,
				tcgplayer: 623559
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817284,
				tcgplayer: 623559
			}
		},
	],
}

export default card
