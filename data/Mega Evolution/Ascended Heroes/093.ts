import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		'es-mx': "Swirlix",
		de: "Flauschling",
		it: "Swirlix",
		pt: "Swirlix"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			'es-mx': "Colisión",
			de: "Ramme",
			it: "Carica",
			pt: "Aríete"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675905,
		cardmarket: 869704
	}
}

export default card