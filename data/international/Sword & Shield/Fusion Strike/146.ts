import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario V",
		'fr-fr': "Lucario V",
		'es-es': "Lucario V",
		'it-it': "Lucario V",
		'pt-br': "Lucario V",
		'de-de': "Lucario V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Aura Sphere",
			'fr-fr': "Aurasphère",
			'de-de': "Aurasphäre",
			'es-es': "Esfera Aural",
			'pt-br': "Aura Esférica",
			'it-it': "Forzasfera"
		},

		damage: 120
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582774,
				tcgplayer: 253360
			}
		},
	],
}

export default card
