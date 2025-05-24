import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		pt: "Larvitar",
		it: "Larvitar",
		de: "Larvitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			pt: "Cabeçada",
			it: "Bottintesta",
			de: "Kopfnuss"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Shimaris Yukichi"
}

export default card