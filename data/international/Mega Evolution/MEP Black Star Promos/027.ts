import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo",
		'it-it': "Haunter",
		'es-es': "Haunter",
		'pt-br': "Haunter"
	},

	illustrator: "Arai Kiriko",
	rarity: "Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [93],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'de-de': "Nebulak",
		'it-it': "Gastly",
		'es-es': "Gastly",
		'pt-br': "Gastly"
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'es-es': "Disparo Embrujado",
			'pt-br': "Tiro Assustador"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 855283,
				tcgplayer: 659232
			}
		},
	],
}

export default card
