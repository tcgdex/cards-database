import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Quaxwell",
		fr: "Canarbello",
		es: "Quaxwell",
		it: "Quaxwell",
		pt: "Quaxwell",
		de: "Fuentente"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Quaxly"
	},

	stage: "Stage1",

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

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			es: "Patada Espiral",
			it: "Spiralcalcio",
			pt: "Chute Espiral",
			de: "Drehtritt"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card