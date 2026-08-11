import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [527],
	set: Set,

	name: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'de-de': "Fleknoil",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'es-es': "Woobat",
		'es-mx': "Woobat"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Heart Stamp",
			'fr-fr': "Crève-Cœur",
			'de-de': "Herzstempel",
			'it-it': "Cuorestampo",
			'pt-br': "Estampa de Coração",
			'es-es': "Arrumaco",
			'es-mx': "Sello de Corazón"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835971,
				tcgplayer: 642148
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835971,
				tcgplayer: 642148
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836557,
				tcgplayer: 642391
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836558,
				tcgplayer: 642319
			}
		},
	],
}

export default card
