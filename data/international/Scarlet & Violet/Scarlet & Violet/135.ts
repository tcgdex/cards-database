import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [942],
	set: Set,

	name: {
		'en-us': "Maschiff",
		'fr-fr': "Grondogue",
		'es-es': "Maschiff",
		'it-it': "Maschiff",
		'pt-br': "Maschiff",
		'de-de': "Mobtiff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "kantaro",

	description: {
		'en-us': "Its well-developed jaw and fangs are strong enough to crunch through boulders, and its thick fat makes for an excellent defense.",
	},

	thirdParty: {
        cardmarket: 702430,
        tcgplayer: 488025
    }
}

export default card