import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Fraxure",
		fr: "Incisache",
		es: "Fraxure",
		it: "Fraxure",
		pt: "Fraxure",
		de: "Sharfax"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			pt: "Garra de Dragão",
			de: "Drachenklaue"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card