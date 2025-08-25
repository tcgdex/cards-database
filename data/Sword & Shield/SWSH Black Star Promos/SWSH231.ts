import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		fr: "Bulbizarre",
		de: "Bisasam",
		es: "Bulbasaur",
		pt: "Bulbasaur",
		it: "Bulbasaur",
		en: "Bulbasaur"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Fouet Lianes",
			de: "Rankenhieb",
			es: "Látigo Cepa",
			pt: "Chicote de Vinha",
			it: "Frustata",
			en: "Vine Whip"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Tranch'Herbe",
			de: "Rasierblatt",
			es: "Hoja Afilada",
			pt: "Folha Navalha",
			it: "Foglielama",
			en: "Razor Leaf"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
	},

	thirdParty: {
		cardmarket: 664337
	}
}

export default card