import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		'es-mx': "Nickit",
		de: "Kleptifux"
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
			en: "Gnaw"
		},

		cost: ["Darkness"],

		damage: 10
	}, {
		name: {
			en: "Rear Kick"
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
