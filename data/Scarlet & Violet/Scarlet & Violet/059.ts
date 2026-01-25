import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		en: "Cetoddle",
		fr: "Piétacé",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},

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
			es: "Témpano",
			it: "Stalattite",
			pt: "Pingente de Gelo",
			de: "Eiszapfen"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Sharp Fin",
			fr: "Aileron Aiguisé",
			es: "Cortaleta",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada",
			de: "Schneidige Flosse"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
        cardmarket: 702354,
        tcgplayer: 487910
    }
}

export default card