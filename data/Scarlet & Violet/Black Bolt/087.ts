import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [495],
	set: Set,

	name: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy",
		es: "Snivy",
		'es-mx': "Snivy"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			pt: "Investida",
			es: "Placaje",
			'es-mx': "Tacleada"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			de: "Rankenhieb",
			it: "Frustata",
			pt: "Chicote de Vinha",
			es: "Látigo Cepa",
			'es-mx': "Látigo Cepa"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835903
	},

	variants: [{
		type: "holo",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}]
}

export default card