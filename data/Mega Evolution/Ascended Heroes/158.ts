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

	illustrator: "Scav",
	rarity: "Common",
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
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869769,
			tcgplayer: 675970
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870384,
			tcgplayer: 676976
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870383,
			tcgplayer: 677116
		}
	},
],
}

export default card
