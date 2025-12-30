import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		de: "Schneppke",
		'pt-br': "Snorunt",
		ko: "눈꼬마"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [361],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is said that several Snorunt gather under giant leaves and live together in harmony.",
		fr: "On dit qu'ils vivent en groupe et\nen harmonie sous des feuilles gigantesques.",
		es: "Se dice que se reúnen en grupos bajo hojas\ngigantescas y viven allí en total armonía.",
		it: "Si dice che vivano in armonia riunendosi\nin gruppi all'ombra di enormi foglie.",
		de: "Gerüchten zufolge versammeln sich Schneppke unter\nriesigen Blättern und leben dort friedlich zusammen.",
		'pt-br': "Dizem que vários Snorunt se juntam\nsob folhas gigantes e vivem em harmonia.",
		ko: "커다란 잎사귀 아래서\n여러 마리의 눈꼬마가 모여\n사이좋게 살고 있다고 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Icicle",
			fr: "Concrétion Glacée",
			es: "Témpano",
			it: "Stalattite",
			de: "Eiszapfen",
			'pt-br': "Pingente de Gelo",
			ko: "고드름"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
