import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wormadam",
		'fr-fr': "Cheniselle",
		'es-es': "Wormadam",
		'it-it': "Wormadam",
		'de-de': "Burmadame",
		'pt-br': "Wormadam",
		'ko-kr': "도롱마담"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [413],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Burmy"
	},

	description: {
		'en-us': "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
		'fr-fr': "Son apparence varie selon le lieu d'évolution.\nSon corps est façonné avec les matériaux à disposition.",
		'es-es': "Su apariencia varía según dónde evolucione.\nLos materiales que haya pasan a formar parte de su cuerpo.",
		'it-it': "Il suo aspetto dipende dal luogo in cui si evolve.\nTutto ciò che ha intorno va a costituire il suo corpo.",
		'de-de': "Die Umgebung, in der es sich entwickelt, bestimmt\nsein Aussehen. Es formt seinen Körper mithilfe\nder umliegenden Materialien.",
		'pt-br': "Muda de aparência dependendo do local\nde sua evolução. Os materiais que tiver\nà mão se tornam parte de seu corpo.",
		'ko-kr': "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'de-de': "Schollenbrecher",
			'pt-br': "Aperto de Terra",
			'ko-kr': "랜드크래시"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
