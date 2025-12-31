import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Lairon",
		fr: "Galegon"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Aron"
	},

	description: {
		en: "It loves iron ore. Groups of them fight for territory\nby bashing one another with their steel bodies.",
		fr: "Il raffole du minerai de fer. Il défend son territoire en chargeant avec son corps d'acier."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Lunge Out",
			fr: "Allonger"
		},

		damage: 60,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card