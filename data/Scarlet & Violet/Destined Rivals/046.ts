import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Buizel",
		fr: "Mustébouée",
		de: "Bamelin",
		it: "Buizel",
		es: "Buizel",
		pt: "Buizel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

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

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			de: "Rasierflosse",
			it: "Pinnalama",
			es: "Aleta Afilada",
			pt: "Barbatana Cortante"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card