import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'de-de': "Memmeon",
		'it-it': "Sobble",
		'es-es': "Sobble",
		'pt-br': "Sobble",
		'es-mx': "Sobble"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [816],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d’Água",
			'de-de': "Aquaknarre"
		},

		damage: 40
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
				cardmarket: 886623,
				tcgplayer: 699878
			}
		},
	],
}

export default card
