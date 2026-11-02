import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		'es-mx': "Wailmer",
		de: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [320],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			'es-mx': "Chorro de Agua",
			de: "Aquaknarre",
			it: "Pistolacqua",
			pt: "Revólver d'Água"
		},

		cost: ["Water", "Water"],

		damage: 40
	}, {
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			'es-mx': "Acuasalpicadura",
			de: "Wellenplatscher",
			it: "Schizzi d'Onda",
			pt: "Onda Borrifante"
		},

		cost: ["Water", "Water", "Water"],

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895803,
				tcgplayer: 704772
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895803,
				tcgplayer: 704772
			}
		},
	],
}

export default card
