import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy",
		de: "Zurrokex"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Headstrike",
			fr: "Coup de Tête",
			es: "Testarada",
			it: "Testata",
			pt: "Golpe de Cabeça",
			de: "Kopftreffer"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card