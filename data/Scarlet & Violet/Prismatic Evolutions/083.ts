import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		pt: "Buneary",
		it: "Buneary",
		de: "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Smash Kick",
			fr: "Coud'Pattes",
			es: "Patada Destrucción",
			pt: "Chute Poderoso",
			it: "Calcio Esplosivo",
			de: "Schmetterkick"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Naoki Saito",

	thirdParty: {
		cardmarket: 805475
	}
}

export default card