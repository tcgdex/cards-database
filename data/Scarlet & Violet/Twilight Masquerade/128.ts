import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [885],
	set: Set,

	name: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		it: "Dreepy",
		pt: "Dreepy",
		de: "Grolldra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			it: "Rancormeschino",
			pt: "Rancinho",
			de: "Mini-Groll"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	description: {
		en: "It has a habit of biting at Clauncher even though it doesn't feed on them. This is said to be vestigial behavior from when Dreepy was alive.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769302,
				tcgplayer: 550172
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769302,
				tcgplayer: 550172
			}
		},
	],

	illustrator: "Scav",

}

export default card