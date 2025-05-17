import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		de: "Karpador",
		'pt-br': "Magikarp",
		ko: "잉어킹"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
		fr: "Un Pokémon tout à fait pathétique. En de très\nrares occasions, il est capable de sauter haut,\nmais jamais à plus de deux mètres.",
		es: "Un Pokémon desvalido y patético. A veces es\ncapaz de saltar alto, pero rara vez más de 2 m.",
		it: "Un Pokémon debole e patetico. Nelle rare\noccasioni in cui spicca alti salti, non riesce\ncomunque a raggiungere i due metri.",
		de: "Ein schwaches und jämmerliches Pokémon.\nManchmal gelingen ihm hohe Sprünge,\naber über 2 m kommt es selten hinaus.",
		'pt-br': "Este Pokémon é patético e nem um pouco\npoderoso. Às vezes, até pula bem alto,\nmas nunca mais de dois metros.",
		ko: "힘없는 한심한 포켓몬이다.\n가끔 높이 뛰어오르지만\n2m를 겨우 넘기는 게 고작이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leap Out",
			fr: "Bondir",
			es: "Saltar del Agua",
			it: "Sguizzata",
			de: "Herausspringen",
			'pt-br': "Pular Fora",
			ko: "튀튀기"
		},

		cost: ["Water"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
