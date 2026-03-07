import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		'es-mx': "Togepi",
		de: "Togepi",
		it: "Togepi",
		pt: "Togepi"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [175],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			'es-mx': "Destructor",
			de: "Klaps",
			it: "Botta",
			pt: "Pancada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869691,
			tcgplayer: 675892
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869691,
			tcgplayer: 675892
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870259,
			tcgplayer: 676914
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870260,
			tcgplayer: 677054
		}
	},
],
}

export default card