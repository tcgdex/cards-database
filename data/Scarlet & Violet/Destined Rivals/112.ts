import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu",
		it: "Riolu",
		es: "Riolu",
		pt: "Riolu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Jab",
			fr: "Taquet",
			de: "Boxschlag",
			it: "Stoccata",
			es: "Puya",
			pt: "Murro"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			de: "Fußkick",
			it: "Colpo Basso",
			es: "Patada Baja",
			pt: "Rasteira"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card