import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		'es-mx': "Snorunt",
		de: "Schneppke",
		it: "Snorunt",
		pt: "Snorunt"
	},

	illustrator: "Dsuke",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [361],

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
		tcgplayer: 676039,
		cardmarket: 869838
	}
}

export default card
