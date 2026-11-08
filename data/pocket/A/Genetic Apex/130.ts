import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'de-de': "Trasla",
		'pt-br': "Ralts",
		'ko-kr': "랄토스"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",

	dexId: [280],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'de-de': "Ramme",
			'pt-br': "Aríete",
			'ko-kr': "부딪치기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "The horns on its head provide a strong power that enables it to sense people's emotions.",
		'fr-fr': "Il perçoit très précisément les émotions humaines\ngrâce aux cornes rouges sur sa tête.",
		'es-es': "Gracias a los cuernos rojos de su cabeza,\npuede captar lo que sienten las personas.",
		'it-it': "Ha la capacità di percepire le emozioni delle\npersone grazie alle corna rosse che ha sul capo.",
		'de-de': "Mit den roten Hörnern auf seinem Kopf kann es\ndie Gefühle der Menschen genau erspüren.",
		'pt-br': "O chifre na sua cabeça lhe garante o poder\ngrandioso de sentir as emoções das pessoas.",
		'ko-kr': "사람의 감정을 머리의\n빨간 뿔로 민감하게\n감지하는 힘을 가졌다."
	},

	boosters: ["mewtwo"]
}

export default card
