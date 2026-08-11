import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'es-es': "Chimchar",
		'it-it': "Chimchar",
		'de-de': "Panflam",
		'pt-br': "Chimchar",
		'ko-kr': "불꽃숭이"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [390],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire.",
		'fr-fr': "La flamme de sa queue est alimentée par un gaz de\nson estomac. Même la pluie ne saurait l'éteindre.",
		'es-es': "El gas de su panza alimenta el fuego de su\nparte trasera, que ni la lluvia puede extinguir.",
		'it-it': "Le fiamme sulla coda, alimentate dai gas della\npancia, non si spengono neppure quando piove.",
		'de-de': "Das Feuer an seinem Hinterteil wird durch Gase\nim Bauch genährt. Selbst Regen löscht es nicht.",
		'pt-br': "Sua cauda flamejante é alimentada pelos gases\ngerados em seu estômago.\nNem mesmo a chuva consegue apagar o fogo.",
		'ko-kr': "엉덩이의 불꽃은 배에서\n만들어진 가스가 연료다.\n비에 젖어도 꺼지지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'de-de': "Kratzer",
			'pt-br': "Arranhão",
			'ko-kr': "할퀴기"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
