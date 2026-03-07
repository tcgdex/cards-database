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

	illustrator: "Wintr Wandr",
	rarity: "Common",
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

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869657,
			tcgplayer: 675858
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869657,
			tcgplayer: 675858
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870211,
			tcgplayer: 676890
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870212,
			tcgplayer: 677030
		}
	},
],
}

export default card