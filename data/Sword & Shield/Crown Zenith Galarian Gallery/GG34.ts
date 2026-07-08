import { Card } from "../../../interfaces"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		en: "Mareep",
		fr: "Wattouat",
		es: "Mareep",
		it: "Mareep",
		pt: "Mareep",
		de: "Voltilamm"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		en: "Rubbing its fleece generates electricity. You'll want to pet it because it's cute, but if you use your bare hand, you'll get a painful shock.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691913,
				tcgplayer: 478063
			}
		},
	],
}

export default card
