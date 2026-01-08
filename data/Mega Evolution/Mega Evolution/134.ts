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

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		de: "Bisasam",
		it: "Bulbasaur",
		es: "Bulbasaur",
		pt: "Bulbasaur",
		'es-mx': "Bulbasaur"
	},
	stage: "Stage1",
	dexId: [2],

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

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		tcgplayer: 654473,
		cardmarket: 851205
	}
}

export default card