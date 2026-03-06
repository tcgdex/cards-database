import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
		es: "Linoone de Galar",
		'es-mx': "Linoone de Galar",
		de: "Galar-Geradaks",
		it: "Linoone di Galar",
		pt: "Linoone de Galar"
	},

	illustrator: "Tomowaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [264],

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

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			'es-mx': "Cuchillada con Garra",
			de: "Klauenschlitzer",
			it: "Lacerartiglio",
			pt: "Golpe de Garra"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675943,
		cardmarket: 869742
	}
}

export default card