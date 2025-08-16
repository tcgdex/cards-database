import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [180],
	set: Set,

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Akira Komayama"
}

export default card