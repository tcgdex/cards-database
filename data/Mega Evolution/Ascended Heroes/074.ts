import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [35],

	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		'es-mx': "Clefairy",
		de: "Piepi",
		it: "Clefairy",
		pt: "Clefairy"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Moon Kick",
			fr: "Coup d'Pied Lunaire",
			es: "Patada Lunar",
			'es-mx': "Patada Lunar",
			de: "Mondkick",
			it: "Calcioluna",
			pt: "Chute Lunar"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675886,
		cardmarket: 869685
	}
}

export default card