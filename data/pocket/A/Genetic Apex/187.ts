import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'de-de': "Tauboga",
		'pt-br': "Pidgeotto",
		'ko-kr': "피죤"
	},

	illustrator: "Scav",
	category: "Pokemon",

	dexId: [17],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Pidgey"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'de-de': "Windstoß",
			'pt-br': "Lufada de Vento",
			'ko-kr': "바람일으키기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
		'fr-fr': "Grâce à ses griffes très puissantes, il est capable de transporter\ndes Noeunoeuf vers un nid éloigné de plus de 100 km.",
		'es-es': "Tiene unas garras desarrolladas. Puede\natrapar un Exeggcute y transportarlo\ndesde una distancia de casi 100 km.",
		'it-it': "Grazie ai potenti artigli può trasportare una preda\ndelle dimensioni di un Exeggcute per oltre 100 km.",
		'de-de': "Die Krallen an seinen Füßen sind sehr ausgeprägt.\nEs kann sogar ein Owei zu seinem Nest\nin 100 km Entfernung tragen.",
		'pt-br': "As garras nos seus pés são bem desenvolvidas.\nEle pode levar presas como Exeggcute para seu\nninho a mais de 100 km de distância.",
		'ko-kr': "발톱이 발달해 있다.\n먹이인 아라리를 잡아\n100km 떨어져 있는 둥지까지 나른다."
	},

	boosters: ["mewtwo"]
}

export default card
