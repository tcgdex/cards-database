import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine",
		es: "Mienshao",
		it: "Mienshao",
		de: "Wie-Shu",
		'pt-br': "Mienshao",
		ko: "비조도"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Mienfoo"
	},


	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			es: "Patada Espiral",
			it: "Spiralcalcio",
			de: "Drehtritt",
			'pt-br': "Chute Espiral",
			ko: "회전차기"
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
		en: "When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.",
		fr: "Lorsqu'il fait face à un adversaire vraiment redoutable, il coupe\nles poils de ses mains avec les dents pour améliorer son agilité.",
		es: "Cuando se encuentra frente a un oponente\nde categoría, se arranca parte del pelaje de\nlos brazos a mordiscos para ganar agilidad.",
		it: "Se incontra un nemico veramente forte,\nsi strappa a morsi i peli degli arti per\nalleggerirsi e guadagnare in agilità.",
		de: "Begegnet es einem wahrhaft starken Gegner,\nbeißt es das Fell an seinen Armen ab, um an\nBeweglichkeit zu gewinnen.",
		'pt-br': "Quando Mienshao se depara com um oponente\nrealmente desafiante, torna-se mais leve ao\narrancar o pelo de seus braços com a boca.",
		ko: "진정한 강적과 만나면\n몸을 가볍게 하기 위해\n양손의 털을 물어뜯어 버린다."
	}
}

export default card
