import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [162],
	set: Set,

	name: {
		'en-us': "Furret",
		'fr-fr': "Fouinar",
		'es-es': "Furret",
		'de-de': "Wiesenior",
		'it-it': "Furret",
		'pt-br': "Furret",
		'es-mx': "Furret"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'de-de': "Wiesor",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'es-mx': "Sentret"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'de-de': "Flinke Kopfnuss",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'es-mx': "Cabezazo Jet"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Tomomi Ozaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817271,
				tcgplayer: 623546
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817271,
				tcgplayer: 623546
			}
		},
	],
}

export default card
