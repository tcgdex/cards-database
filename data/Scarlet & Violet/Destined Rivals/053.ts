import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Quaxwell",
		fr: "Canarbello",
		de: "Fuentente",
		it: "Quaxwell",
		es: "Quaxwell",
		pt: "Quaxwell"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			de: "Regenplatscher",
			it: "Spruzzapioggia",
			es: "Golpe de Lluvia",
			pt: "Chuva Borrifante"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Spiral Kick",
			fr: "Coup'd Pied en Spirale",
			de: "Drehtritt",
			it: "Spiralcalcio",
			es: "Patada Espiral",
			pt: "Chute Espiral"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card