import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Gruikui",
		de: "Floink",
		es: "Tepig",
		pt: "Tepig",
		it: "Tepig",
		en: "Tepig"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Collision",
			de: "Ramme",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica",
			en: "Ram"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Fournaise",
			de: "Glühen",
			es: "Combustión",
			pt: "Combustão",
			it: "Fuoco Continuo",
			en: "Combustion"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		en: "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp."
	}
}

export default card