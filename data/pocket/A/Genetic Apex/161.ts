import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'de-de': "Wie-Shu",
		'pt-br': "Mienshao",
		'ko-kr': "비조도"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [620],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Mienfoo"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spiral Kick",
			'fr-fr': "Coup'd Pied en Spirale",
			'es-es': "Patada Espiral",
			'it-it': "Spiralcalcio",
			'de-de': "Drehtritt",
			'pt-br': "Chute Espiral",
			'ko-kr': "회전차기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.",
		'fr-fr': "Lorsqu'il fait face à un adversaire vraiment redoutable, il coupe\nles poils de ses mains avec les dents pour améliorer son agilité.",
		'es-es': "Cuando se encuentra frente a un oponente\nde categoría, se arranca parte del pelaje de\nlos brazos a mordiscos para ganar agilidad.",
		'it-it': "Se incontra un nemico veramente forte,\nsi strappa a morsi i peli degli arti per\nalleggerirsi e guadagnare in agilità.",
		'de-de': "Begegnet es einem wahrhaft starken Gegner,\nbeißt es das Fell an seinen Armen ab, um an\nBeweglichkeit zu gewinnen.",
		'pt-br': "Quando Mienshao se depara com um oponente\nrealmente desafiante, torna-se mais leve ao\narrancar o pelo de seus braços com a boca.",
		'ko-kr': "진정한 강적과 만나면\n몸을 가볍게 하기 위해\n양손의 털을 물어뜯어 버린다."
	},

	boosters: ["pikachu"]
}

export default card
