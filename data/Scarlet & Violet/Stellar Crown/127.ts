import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Snap",
			fr: "Coud'Queue Sec",
			es: "Pinza Cola",
			it: "Schioccacoda",
			pt: "Surpresa de Cauda",
			de: "Schweifhieb"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			pt: "Ataque em Velocidade",
			de: "Tempoangriff"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Nurikabe"
}

export default card
