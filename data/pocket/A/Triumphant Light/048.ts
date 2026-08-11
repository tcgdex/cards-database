import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'de-de': "Zubat",
		'pt-br': "Zubat",
		'ko-kr': "주뱃"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [41],
	hp: 50,
	types: ["Darkness"],

	description: {
		'en-us': "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
		'fr-fr': "Il sonde les environs en émettant des ultrasons\navec sa bouche, et peut ainsi se frayer un chemin\nmême dans les grottes les plus étroites.",
		'es-es': "Emite ondas ultrasónicas por la boca\npara escrutar el entorno, lo que le permite\nvolar con pericia por cuevas angostas.",
		'it-it': "Sonda l'ambiente circostante emettendo\nultrasuoni dalla bocca. In questo modo riesce\na volteggiare agilmente anche in caverne strette.",
		'de-de': "Über den Mund stößt es Ultraschallwellen aus,\num seine Umgebung zu erkunden. So kann es\nselbst in engen Höhlen geschickt umherfliegen.",
		'pt-br': "Emite ondas ultrassônicas de sua boca para\nverificar os arredores. Zubat voa com certa\ndestreza mesmo em cavernas apertadas.",
		'ko-kr': "입에서 내보내는 초음파로\n주위의 상황을 살핀다. 좁은\n동굴에서도 능숙하게 날아다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'de-de': "Biss",
			'pt-br': "Mordida",
			'ko-kr': "물기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
