import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos",
		de: "Ampharos"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "H",

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	}
}

export default card