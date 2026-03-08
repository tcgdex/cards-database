import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		it: "Pikipek",
		de: "Peppeck",
		'pt-br': "Pikipek",
		ko: "콕코구리"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [731],
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It pecks at trees with its hard beak. You can get some idea of its mood or condition from the rhythm of its pecking.",
		fr: "On peut deviner son état d'esprit et\nde santé en étudiant le rythme auquel\nil tape contre les arbres avec son bec dur.",
		es: "Agujerea los árboles con su robusto pico. Al oír su picoteo, uno\npuede deducir más o menos su humor o su estado de forma.",
		it: "Picchia sul legno con il suo duro becco. Dal ritmo dei suoi\ncolpi è possibile capire il suo umore e il suo stato di salute.",
		de: "Es pickt mit seinem robusten Schnabel auf Bäume ein.\nAn seinem Pickrhythmus lassen sich seine Laune und\nsein Befinden ablesen.",
		'pt-br': "Perfura árvores com seu bico resistente.\nO ritmo das bicadas dão uma ideia de como está\nseu humor ou sua condição.",
		ko: "딱딱한 부리로 나무를 쫀다.\n쪼는 리듬으로 그때의 기분이나\n상태를 대강 알 수 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			de: "Pikser",
			'pt-br': "Bicada",
			ko: "쪼기"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card