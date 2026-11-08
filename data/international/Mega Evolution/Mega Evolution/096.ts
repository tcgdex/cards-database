import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'de-de': "Forgita",
		'it-it': "Tinkatink",
		'es-es': "Tinkatink",
		'pt-br': "Tinkatink",
		'es-mx': "Tinkatink"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	dexId: [957],

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'it-it': "Battuta",
			'es-es': "Toque",
			'pt-br': "Pulso",
			'es-mx': "Golpeteo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851167,
				tcgplayer: 654435
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851167,
				tcgplayer: 654435
			}
		},
	],
}

export default card
