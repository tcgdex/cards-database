import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [25],

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
		'es-mx': "Pikachu ex",
		de: "Pikachu-ex",
		it: "Pikachu-ex",
		pt: "Pikachu ex"
	},

	illustrator: "booota",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			'es-mx': "Atactrueno",
			de: "Donnerblitz",
			it: "Fulmine",
			pt: "Relâmpago"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 676088,
		cardmarket: 869888
	}
}

export default card
