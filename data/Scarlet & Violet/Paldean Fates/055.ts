import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Allure",
			fr: "Allure",
			es: "Atractivo",
			it: "Affascinante",
			pt: "Fascinar"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card