import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		'es-mx': "Togepi",
		de: "Togepi",
		it: "Togepi",
		pt: "Togepi"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			'es-mx': "Destructor",
			de: "Klaps",
			it: "Botta",
			pt: "Pancada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675892,
		cardmarket: 869691
	}
}

export default card