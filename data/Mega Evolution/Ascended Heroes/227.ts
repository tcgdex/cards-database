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
	dexId: [361],
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

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "In some snowy lands, certain folklore says a house will prosper if a Snorunt lives there.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869838,
				tcgplayer: 676039
			}
		}
	],
}

export default card
