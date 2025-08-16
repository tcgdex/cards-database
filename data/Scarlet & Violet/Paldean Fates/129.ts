import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [997],
	set: Set,

	name: {
		en: "Arctibax",
		fr: "Cryodo",
		es: "Arctibax",
		it: "Arctibax",
		pt: "Arctibax",
		de: "Cryospino"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Sharp Fin",
			fr: "Aileron Aiguisé",
			es: "Cortaleta",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada",
			de: "Schneidige Flosse"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Frost Smash",
			fr: "Impact Glacial",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kouki Saitou"
}

export default card