import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Burmy",
		fr: "Cheniti",
		es: "Burmy",
		it: "Burmy",
		de: "Burmy",
		'pt-br': "Burmy",
		ko: "도롱충이"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [412],
	hp: 50,
	types: ["Grass"],

	description: {
		en: "To shelter itself from cold, wintry winds, it covers\nitself with a cloak made of twigs and leaves.",
		fr: "Pour se protéger des vents glacés de l'hiver,\nil s'est tissé une cape de feuilles et de brindilles.",
		es: "Para protegerse de los vientos fríos invernales,\nse cubre con un caparazón de ramas y hojas.",
		it: "Per ripararsi dal freddo e dai venti invernali\nsi copre con un manto fatto di rami e foglie.",
		de: "Um sich vor dem eisigen Winterwind zu schützen,\nlegt es sich unter einen Umhang aus Ästen und Laub.",
		'pt-br': "Para se proteger dos ventos gelados do inverno, cobre-se\ncom um manto feito de galhos e folhas.",
		ko: "차가운 초겨울 바람을 막으려고\n작은 가지나 낙엽을 재료로\n도롱이를 만들어 몸을 감싼다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
