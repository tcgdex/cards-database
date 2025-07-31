import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		de: "Panflam",
		'pt-br': "Chimchar",
		ko: "불꽃숭이"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "Its fiery rear end is fueled by gas made in its belly.\nEven rain can't extinguish the fire.",
		fr: "La flamme de sa queue est alimentée par un gaz de\nson estomac. Même la pluie ne saurait l'éteindre.",
		es: "El gas de su panza alimenta el fuego de su\nparte trasera, que ni la lluvia puede extinguir.",
		it: "Le fiamme sulla coda, alimentate dai gas della\npancia, non si spengono neppure quando piove.",
		de: "Das Feuer an seinem Hinterteil wird durch Gase\nim Bauch genährt. Selbst Regen löscht es nicht.",
		'pt-br': "Sua cauda flamejante é alimentada pelos gases\ngerados em seu estômago.\nNem mesmo a chuva consegue apagar o fogo.",
		ko: "엉덩이의 불꽃은 배에서\n만들어진 가스가 연료다.\n비에 젖어도 꺼지지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: []
}

export default card
