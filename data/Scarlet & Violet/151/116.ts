import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		fr: "Hypotrempe",
		en: "Horsea",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Aileron Aiguisé",
			en: "Sharp Fin",
			es: "Cortaleta",
			it: "Pinnaffilata",
			pt: "Barbatana Afiada",
			de: "Schneidige Flosse"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "aspara",

	thirdParty: {
		cardmarket: 733759
	}
}

export default card