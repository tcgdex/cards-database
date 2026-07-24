import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		'es-mx': "Charjabug",
		de: "Akkup",
		it: "Charjabug",
		pt: "Charjabug"
	},

	illustrator: "Kazuhisa Uragami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [737],
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Grubbin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			'es-mx': "Fuerza de Garra",
			de: "Klammer",
			it: "Presa",
			pt: "Agarramento Compressor"
		},

		cost: ["Lightning"],

		damage: 30
	}, {
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			'es-mx': "Colisión",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete"
		},

		cost: ["Lightning", "Lightning"],

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895813,
				tcgplayer: 704782
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895813,
				tcgplayer: 704782
			}
		},
	],
}

export default card
