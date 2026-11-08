import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'de-de': "Zapplardin",
		'pt-br': "Tynamo",
		'ko-kr': "저리어"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",

	dexId: [602],
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Tiny Charge",
			'fr-fr': "Décharge Mineure",
			'es-es': "Carga Diminuta",
			'it-it': "Sottocarica Minuscola",
			'de-de': "Mini-Stromstoß",
			'pt-br': "Carga Pequenina",
			'ko-kr': "프티전기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "While one alone doesn't have much power, a chain of many Tynamo can be as powerful as lightning.",
		'fr-fr': "Tout seuls, ils ne dégagent pas beaucoup d'électricité, mais\nun banc d'Anchwatt produit la même puissance qu'un éclair.",
		'es-es': "La electricidad de uno solo es insignificante,\npero, si multitud de Tynamo se conectan,\nconsiguen la potencia de un rayo.",
		'it-it': "La carica elettrica di un Tynamo è\ndebole, ma se più esemplari si uniscono\nraggiungono la potenza di un fulmine.",
		'de-de': "Allein erzeugt es nur wenig Strom, doch wenn\nsich viele Zapplardin miteinander verbinden,\ngleicht ihre Kraft der eines Blitzes.",
		'pt-br': "Enquanto um sozinho não é tão poderoso, uma corrente\nde vários Tynamo pode ser tão forte quanto um raio.",
		'ko-kr': "한 마리의 전력은 적지만\n많은 저리어가 연결되면\n번개와 같은 위력이 된다."
	},

	boosters: ["mewtwo"]
}

export default card
