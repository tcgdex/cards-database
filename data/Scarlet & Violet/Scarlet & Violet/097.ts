import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [926],
	set: Set,

	name: {
		en: "Fidough",
		fr: "Pâtachiot",
		es: "Fidough",
		it: "Fidough",
		pt: "Fidough",
		de: "Hefel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mizue",

	thirdParty: {
        cardmarket: 702393,
        tcgplayer: 487968
    }
}

export default card