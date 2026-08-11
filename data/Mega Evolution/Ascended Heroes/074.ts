import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		'es-mx': "Clefairy",
		de: "Piepi",
		it: "Clefairy",
		pt: "Clefairy"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [35],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Moon Kick",
			fr: "Coup d'Pied Lunaire",
			es: "Patada Lunar",
			'es-mx': "Patada Lunar",
			de: "Mondkick",
			it: "Calcioluna",
			pt: "Chute Lunar"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "On nights with a full moon, they gather together and dance. The surrounding area is enveloped in an abnormal magnetic field.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869685,
			tcgplayer: 675886
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870252,
			tcgplayer: 676910
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870251,
			tcgplayer: 677050
		}
	},
],
}

export default card
