import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		de: "Schneckmag",
		'pt-br': "Slugma",
		ko: "마그마그"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "A common sight in volcanic areas, it slowly slithers around in a constant search for warm places.",
		fr: "Commun dans les régions volcaniques, il se déplace\nsans cesse pour trouver des endroits chauds.",
		es: "Asiduo a las zonas volcánicas, se desliza\nlentamente en busca de lugares calientes.",
		it: "Comune nelle aree vulcaniche, striscia in giro\nlentamente, sempre alla ricerca di luoghi caldi.",
		de: "Es hält sich ständig bei Vulkanen auf und ist\nstets kriechend auf der Suche nach warmen\nAufenthaltsorten.",
		'pt-br': "Visão comum em áreas vulcânicas, desliza lentamente\nem uma busca constante por locais quentes.",
		ko: "화산 지대에 많이 나타난다.\n따뜻한 곳을 찾아서\n느릿느릿 기어 다니고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			de: "Flackern",
			'pt-br': "Chama",
			ko: "불꽃"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card
