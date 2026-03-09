import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Larry's Staravia",
		fr: "Étourvol d'Okuba",
		es: "Staravia de Laureano",
		'es-mx': "Staravia de Laureano",
		de: "Aokis Staravia",
		it: "Staravia di Ubaldo",
		pt: "Staravia do Lauro"
	},

	illustrator: "Fujimoto Gold",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			'es-mx': "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			'es-mx': "Ala Cortante",
			de: "Rasierflügel",
			it: "Ala Tagliente",
			pt: "Asa Cortante"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675981,
		cardmarket: 869780
	}
}

export default card