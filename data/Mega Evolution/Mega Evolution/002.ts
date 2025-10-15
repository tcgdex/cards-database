import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
		de: "Bisaknosp",
		it: "Ivysaur",
		es: "Ivysaur",
		pt: "Ivysaur",
		'es-mx': "Ivysaur"
	},

	illustrator: "Takumi Wada",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			de: "Rasierblatt",
			it: "Foglielama",
			es: "Hoja Afilada",
			pt: "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654341
	}
}

export default card