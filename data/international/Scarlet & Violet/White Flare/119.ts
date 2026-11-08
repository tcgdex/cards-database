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

	illustrator: "Shibuzoh.",
	rarity: "Illustration rare",
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
		type: "holo",
		thirdParty: {
			cardmarket: 836131,
			tcgplayer: 642231
		}
	},
],
}

export default card
