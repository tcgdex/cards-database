import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		de: "Trasla",
		'pt-br': "Ralts",
		ko: "랄토스"
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
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
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
		en: "The horns on its head provide a strong power that enables it to sense people's emotions.",
		fr: "Il perçoit très précisément les émotions humaines\ngrâce aux cornes rouges sur sa tête.",
		es: "Gracias a los cuernos rojos de su cabeza,\npuede captar lo que sienten las personas.",
		it: "Ha la capacità di percepire le emozioni delle\npersone grazie alle corna rosse che ha sul capo.",
		de: "Mit den roten Hörnern auf seinem Kopf kann es\ndie Gefühle der Menschen genau erspüren.",
		'pt-br': "O chifre na sua cabeça lhe garante o poder\ngrandioso de sentir as emoções das pessoas.",
		ko: "사람의 감정을 머리의\n빨간 뿔로 민감하게\n감지하는 힘을 가졌다."
	},

	boosters: ["mewtwo"]
}

export default card
