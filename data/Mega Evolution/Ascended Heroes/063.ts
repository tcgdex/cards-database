import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		'es-mx': "Helioptile",
		de: "Eguana",
		it: "Helioptile",
		pt: "Helioptile"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			'es-mx': "Electropatada",
			de: "Stromtritt",
			it: "Dinamocalcio",
			pt: "Chute Zap"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675875,
		cardmarket: 869674
	}
}

export default card