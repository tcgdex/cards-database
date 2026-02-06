import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [629],

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		'es-mx': "Vullaby",
		de: "Skallyk",
		it: "Vullaby",
		pt: "Vullaby"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			'es-mx': "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675950,
		cardmarket: 869749
	}
}

export default card