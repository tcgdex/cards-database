import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [361],

	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		'es-mx': "Snorunt",
		de: "Schneppke",
		it: "Snorunt",
		pt: "Snorunt"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Chilly",
			fr: "Glacial",
			es: "Fresquito",
			'es-mx': "Frialdad",
			de: "Frösteln",
			it: "Addiaccio",
			pt: "Frio"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675858,
		cardmarket: 869657
	}
}

export default card