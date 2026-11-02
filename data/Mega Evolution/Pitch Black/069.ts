import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Type: Null",
		fr: "Type:0",
		es: "Código Cero",
		'es-mx': "Código Cero",
		de: "Typ:Null",
		it: "Tipo Zero",
		pt: "Tipo Nulo"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	dexId: [772],
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Power Edge",
			fr: "Lame Redoutable",
			es: "Filo Poderoso",
			'es-mx': "Filo Poderoso",
			de: "Kraftklinge",
			it: "Colpotente",
			pt: "Gume Poderoso"
		},

		cost: ["Colorless", "Colorless"],

		damage: 40
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
				cardmarket: 895853,
				tcgplayer: 704826
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895853,
				tcgplayer: 704826
			}
		},
	],
}

export default card
