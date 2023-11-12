import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Cryodo",
		en: "Arctibax",
		es: "Arctibax",
		it: "Arctibax",
		pt: "Arctibax",
		de: "Cryospino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Aileron Aiguisé",
			en: "Sharp Fin",
			es: "Cortaleta",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada",
			de: "Schneidige Flosse"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Impact Glacial",
			en: "Frost Smash",
			es: "Golpe Gélido",
			it: "Gelocolpo",
			pt: "Pancada Congelada",
			de: "Frostschlag"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card