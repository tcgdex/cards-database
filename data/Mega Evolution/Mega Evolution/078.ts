import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		de: "Glibunkel",
		it: "Croagunk",
		es: "Croagunk",
		pt: "Croagunk",
		'es-mx': "Croagunk"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [453],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Smack",
			fr: "Claque",
			de: "Klatscher",
			it: "Schiaffo",
			es: "Palmetazo",
			pt: "Estalo",
			'es-mx': "Cachetazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654417
	}
}

export default card