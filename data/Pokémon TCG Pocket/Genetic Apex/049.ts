import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		it: "Salandit",
		de: "Molunk",
		'pt-br': "Salandit",
		ko: "야도뇽"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
		fr: "Il provoque ses proies afin de les attirer dans\nd'étroites zones rocheuses, puis il les étourdit\navec son gaz toxique avant de les achever.",
		es: "Provoca a sus presas para conducirlas a zonas\nrocosas y estrechas, donde las aturde con un\ngas venenoso antes de acabar con ellas.",
		it: "Provoca le sue prede e le attira in stretti luoghi rocciosi,\nper poi stordirle con il suo gas velenoso e abbatterle.",
		de: "Es provoziert seine Beute und lockt sie\nin enge Felsspalten, wo es sie dann mit\nGiftgas ins Taumeln bringt und erlegt.",
		'pt-br': "Provoca suas presas e as atrai para áreas estreitas\ne rochosas. Em seguida, espirra sobre elas um gás\ntóxico para deixá-las atordoadas e dar o bote.",
		ko: "먹잇감을 도발해서\n좁은 암석 지대로 유인한 뒤\n어지러워지는 독가스를 뿜어서 마무리한다."
	},

	boosters: ["mewtwo"]
}

export default card
