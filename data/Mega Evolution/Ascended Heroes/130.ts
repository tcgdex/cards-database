import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar",
		es: "Zigzagoon de Galar",
		'es-mx': "Zigzagoon de Galar",
		de: "Galar-Zigzachs",
		it: "Zigzagoon di Galar",
		pt: "Zigzagoon de Galar"
	},

	illustrator: "osare",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			'es-mx': "Mordisquear",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869741,
			tcgplayer: 675942
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870341,
			tcgplayer: 676955
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870342,
			tcgplayer: 677095
		}
	},
],
}

export default card
