import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'de-de': "Karpador",
		'pt-br': "Magikarp",
		'ko-kr': "잉어킹"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",

	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
		'fr-fr': "Un Pokémon tout à fait pathétique. En de très\nrares occasions, il est capable de sauter haut,\nmais jamais à plus de deux mètres.",
		'es-es': "Un Pokémon desvalido y patético. A veces es\ncapaz de saltar alto, pero rara vez más de 2 m.",
		'it-it': "Un Pokémon debole e patetico. Nelle rare\noccasioni in cui spicca alti salti, non riesce\ncomunque a raggiungere i due metri.",
		'de-de': "Ein schwaches und jämmerliches Pokémon.\nManchmal gelingen ihm hohe Sprünge,\naber über 2 m kommt es selten hinaus.",
		'pt-br': "Este Pokémon é patético e nem um pouco\npoderoso. Às vezes, até pula bem alto,\nmas nunca mais de dois metros.",
		'ko-kr': "힘없는 한심한 포켓몬이다.\n가끔 높이 뛰어오르지만\n2m를 겨우 넘기는 게 고작이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Leap Out",
			'fr-fr': "Bondir",
			'es-es': "Saltar del Agua",
			'it-it': "Sguizzata",
			'de-de': "Herausspringen",
			'pt-br': "Pular Fora",
			'ko-kr': "튀튀기"
		},

		cost: ["Water"],

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'ko-kr': "이 포켓몬을 벤치 포켓몬과 교체한다."
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
