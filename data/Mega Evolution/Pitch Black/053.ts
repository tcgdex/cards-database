import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		'es-mx': "Nickit",
		de: "Kleptifux",
		it: "Nickit",
		pt: "Nickit"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	dexId: [827],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			'es-mx': "Mordisquear",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída"
		},

		cost: ["Darkness"],

		damage: 10
	}, {
		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			'es-mx': "Patada Trasera",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro"
		},

		cost: ["Darkness", "Colorless"],

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895838,
				tcgplayer: 704810
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895838,
				tcgplayer: 704810
			}
		},
	],
}

export default card
