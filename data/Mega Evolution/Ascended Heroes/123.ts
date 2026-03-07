import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		'es-mx': "Gastly",
		de: "Nebulak",
		it: "Gastly",
		pt: "Gastly"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [92],

	attacks: [{
		cost: ["Darkness"],

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
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869734,
			tcgplayer: 675935
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869734,
			tcgplayer: 675935
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: /* MISSING_ID */,
			tcgplayer: 676949
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: /* MISSING_ID */,
			tcgplayer: 677089
		}
	},
],
}

export default card