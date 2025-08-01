import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		en: "Magmar",
		fr: "Magmar",
		es: "Magmar",
		it: "Magmar",
		pt: "Magmar",
		de: "Magmar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fiery Punch",
			fr: "Poing de Feu",
			es: "Puño Ardiente",
			it: "Pugnodifuoco",
			pt: "Soco Ardente",
			de: "Flammenschlag"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608469
	}
}

export default card