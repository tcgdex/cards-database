import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		de: "Lin-Fu",
		'pt-br': "Mienfoo",
		ko: "비조푸"
	},

	illustrator: "match",
	category: "Pokemon",

	dexId: [619],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			it: "Botta",
			de: "Klaps",
			'pt-br': "Pancada",
			ko: "막치기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "In one minute, a well-trained Mienfoo can chop with its arms more than 100 times.",
		fr: "Les Kungfouine bien entraînés sont capables d'asséner\nplus de cent coups par minute du tranchant de la main.",
		es: "Un Mienfoo bien entrenado es capaz de\npropinar más de cien golpes por minuto.",
		it: "I Mienfoo più allenati sono in grado di sferrare\npiù di 100 colpi al minuto con il taglio della mano.",
		de: "Ein gut trainiertes Lin-Fu kann in einer Minute\nüber 100 Schläge ausführen.",
		'pt-br': "Um Mienfoo bem treinado é capaz de usar seus braços\npara dar mais de 100 golpes por minuto.",
		ko: "잘 단련된 비조푸는\n1분에 100회 이상\n촙 공격을 할 수 있다."
	},

	boosters: ["pikachu"]
}

export default card
