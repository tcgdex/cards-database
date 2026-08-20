import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		'es-mx': "Dreepy",
		de: "Grolldra",
		it: "Dreepy",
		pt: "Dreepy"
	},

	illustrator: "Jerky",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [885],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			de: "Mini-Groll",
			it: "Rancormeschino",
			pt: "Rancinho"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	description: {
		en: "It has a habit of biting at Clauncher even though it doesn’t feed on them. This is said to be vestigial behavior from when Dreepy was alive.",
		de: "Es beißt sich oft an Scampisto fest, ohne dieses zu fressen. Das hält man für eine Angewohnheit aus einer Zeit, als Grolldra noch am Leben war."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869858,
				tcgplayer: 676059
			}
		}
	],
}

export default card
