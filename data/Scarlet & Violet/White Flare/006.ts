import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [585],
	set: Set,

	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		de: "Sesokitz",
		it: "Deerling",
		pt: "Deerling",
		es: "Deerling",
		'es-mx': "Deerling"
	},

	illustrator: "Narano",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			es: "Patada Trasera",
			'es-mx': "Patada Trasera"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835911,
				tcgplayer: 642121
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835911,
				tcgplayer: 642121
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836501,
				tcgplayer: 642366
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836502,
				tcgplayer: 642294
			}
		},
	],
}

export default card
