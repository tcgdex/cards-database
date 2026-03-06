import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		'es-mx': "Charmeleon",
		de: "Glutexo",
		it: "Charmeleon",
		pt: "Charmeleon"
	},

	illustrator: "Julie Hang",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			'es-mx': "Explosión Ígnea",
			de: "Hitzestoß",
			it: "Caldobomba",
			pt: "Raio de Calor"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675833,
		cardmarket: 869632
	}
}

export default card