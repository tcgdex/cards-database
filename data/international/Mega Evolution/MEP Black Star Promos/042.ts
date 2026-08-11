import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'de-de': "Plinfa",
		'it-it': "Piplup",
		'es-es': "Piplup",
		'pt-br': "Piplup",
		'es-mx': "Piplup"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [393],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'de-de': "Pikser",
			'it-it': "Beccata",
			'es-es': "Picotazo",
			'pt-br': "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875191,
				tcgplayer: 684466
			}
		},
	],
}

export default card
