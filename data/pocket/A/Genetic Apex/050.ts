import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'de-de': "Amfira",
		'pt-br': "Salazzle",
		'ko-kr': "염뉴트"
	},

	illustrator: "hatachu",
	category: "Pokemon",

	dexId: [758],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Salandit"
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Fire Claws",
			'fr-fr': "Griffes Enflammées",
			'es-es': "Garras de Fuego",
			'it-it': "Artigli Infuocati",
			'de-de': "Feuerkrallen",
			'pt-br': "Garras de Fogo",
			'ko-kr': "불꽃의발톱"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
		'fr-fr': "Il étourdit ses adversaires avec son gaz toxique,\npuis il les asservit en exécutant une danse envoûtante.",
		'es-es': "Convierte a sus rivales en devotos súbditos\ntras marearlos con su gas venenoso y seducirlos\ncon los cautivadores movimientos de su cuerpo.",
		'it-it': "Trasforma gli avversari in seguaci stordendoli con del\ngas tossico per poi sedurli con movenze ammalianti.",
		'de-de': "Zuerst benebelt es Gegner mit Giftgas, um sie\ndanach mit fesselnden Körperbewegungen zu\nbetören und zu ergebenen Dienern zu machen.",
		'pt-br': "Salazzle deixa os oponentes zonzos com seu\ngás venenoso, depois os cativa com movimentos\nfascinantes para transformá-los em servos leais.",
		'ko-kr': "독가스에 어질어질해진 상대를\n요염한 몸놀림으로 유혹해서\n충실한 부하로 만들어 버린다."
	},

	boosters: ["mewtwo"]
}

export default card
