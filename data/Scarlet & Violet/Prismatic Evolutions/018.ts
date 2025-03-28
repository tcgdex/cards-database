import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		pt: "Slowpoke",
		it: "Slowpoke",
		de: "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			pt: "Revólver d'Água",
			it: "Pistolacqua",
			de: "Aquaknarre"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			pt: "Surra de Cauda",
			it: "Codabotta",
			de: "Schweifvertrimmer"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card