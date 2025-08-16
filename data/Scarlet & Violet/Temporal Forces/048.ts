import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [963],
	set: Set,

	name: {
		en: "Finizen",
		fr: "Dofin",
		es: "Finizen",
		it: "Finizen",
		pt: "Finizen",
		de: "Normifin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
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

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "HYOGONOSUKE"
}

export default card