import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Erika's Bellsprout",
		fr: "Chétiflor d'Erika",
		es: "Bellsprout de Erika",
		'es-mx': "Bellsprout de Erika",
		de: "Erikas Knofensa",
		it: "Bellsprout di Erika",
		pt: "Bellsprout da Érica"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [69],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Slap",
			fr: "Gifle de Liane",
			es: "Bofetón Látigo",
			'es-mx': "Lianazo",
			de: "Rankenklatscher",
			it: "Lianasberla",
			pt: "Tapa de Vinhas"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675816,
		cardmarket: 869615
	}
}

export default card