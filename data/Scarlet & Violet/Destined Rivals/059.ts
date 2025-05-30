import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cetoddle",
		fr: "Piétacé",
		de: "Flaniwal",
		it: "Cetoddle",
		es: "Cetoddle",
		pt: "Cetoddle"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Icicle",
			fr: "Concrétion Glacée",
			de: "Eiszapfen",
			it: "Stalattite",
			es: "Témpano",
			pt: "Pingente de Gelo"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Sharp Fin",
			fr: "Aileron Aiguisé",
			de: "Schneidige Flosse",
			it: "Pinnaffilata",
			es: "Cortaleta",
			pt: "Barbatana Afiada"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card