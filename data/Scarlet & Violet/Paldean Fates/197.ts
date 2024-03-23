import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
		es: "Pidgeotto",
		it: "Pidgeotto",
		pt: "Pidgeotto"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Asa"
		},

		damage: 20
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card