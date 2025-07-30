import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		de: "Tanhel",
		it: "Beldum",
		pt: "Beldum",
		'es-mx': "Beldum"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			de: "Rundumangriff",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			'es-mx': "Ataque Giratorio"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			de: "Strahl",
			it: "Raggio",
			pt: "Feixe",
			'es-mx': "Rayo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	illustrator: "Izucch",

	thirdParty: {
		cardmarket: 817213
	}
}

export default card