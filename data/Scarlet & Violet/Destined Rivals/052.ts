import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Quaxly",
		fr: "Coiffeton",
		de: "Kwaks",
		it: "Quaxly",
		es: "Quaxly",
		pt: "Quaxly"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			it: "Botta",
			es: "Destructor",
			pt: "Pancada"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Kick",
			fr: "Koud'Pied",
			de: "Tritt",
			it: "Calcio",
			es: "Patada",
			pt: "Chute"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card