import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [4],

	name: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		'es-mx': "Charmander",
		de: "Glumanda",
		it: "Charmander",
		pt: "Charmander"
	},

	illustrator: "Orca",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			es: "Garras de Fuego",
			'es-mx': "Garras de Fuego",
			de: "Feuerkrallen",
			it: "Artigli Infuocati",
			pt: "Garras de Fogo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675832,
		cardmarket: 869631
	}
}

export default card