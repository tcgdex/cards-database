import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		de: "Sandan",
		it: "Sandshrew",
		es: "Sandshrew",
		pt: "Sandshrew",
		'es-mx': "Sandshrew"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [27],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			de: "Schaufelkrallen",
			it: "Scavazanne",
			es: "Hundir Garras",
			pt: "Fincar Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			de: "Lehmschelle",
			it: "Fangosberla",
			es: "Bofetón Lodo",
			pt: "Tapa de Lama",
			'es-mx': "Bofetón Lodo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654407
	}
}

export default card