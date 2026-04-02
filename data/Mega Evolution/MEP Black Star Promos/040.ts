import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		de: "Chelast",
		it: "Turtwig",
		es: "Turtwig",
		pt: "Turtwig",
		'es-mx': "Turtwig"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",
	dexId: [387],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

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
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875189
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
