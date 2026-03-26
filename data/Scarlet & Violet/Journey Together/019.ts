import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		de: "Micrick",
		it: "Nymble",
		pt: "Nymble",
		'es-mx': "Nymble"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Ayako Ozaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817171,
				tcgplayer: 623446
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817171,
				tcgplayer: 623446
			}
		},
	],
}

export default card
