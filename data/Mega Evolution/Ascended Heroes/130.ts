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
	dexId: [263],

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

	thirdParty: {
		tcgplayer: 675942,
		cardmarket: 869741
	}
}

export default card