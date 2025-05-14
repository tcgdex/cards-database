import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Dewpider",
		fr: "Araqua",
		es: "Dewpider",
		it: "Dewpider",
		de: "Araqua",
		'pt-br': "Dewpider",
		ko: "물거미"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It forms a water bubble at the rear of its body and then covers its head with it. Meeting another Dewpider means comparing water-bubble sizes.",
		fr: "Il enveloppe sa tête dans une bulle d'eau qu'il\na gonflée avec son abdomen. Il aime en comparer\nla taille avec celles de ses congénères.",
		es: "Crea una burbuja de agua con el abdomen y se\ncubre la cabeza con ella. Si dos ejemplares se\nencuentran, comparan el tamaño de sus burbujas.",
		it: "Con l'addome gonfia una bolla d'acqua in\ncui tiene infilata la testa. Fa a gara con gli\naltri Dewpider a chi ha la bolla più grande.",
		de: "Mit dem Hinterleib füllt es eine Wasserblase auf und\nhüllt seinen Kopf darin ein. Trifft es andere Araqua,\nvergleichen sie ihre Wasserblasengröße.",
		'pt-br': "Forma uma bolha de água na parte de trás do seu corpo e,\nem seguida, cobre sua cabeça com ela. Ao se encontrarem,\ndois Dewpider vão sempre comparar os tamanhos das suas bolhas.",
		ko: "엉덩이로 수포를 부풀려서\n머리를 감싼다. 동료끼리\n수포의 크기를 비교한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			de: "Haken",
			'pt-br': "Gancho",
			ko: "걸기"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card