import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		es: "Eevee",
		de: "Evoli"
	},

	illustrator: "nisimono",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		es: "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
		de: "Um sich jeder Umgebung perfekt anpassen zu können, ist es in der Lage, sich zu verschiedenen Pokémon zu entwickeln."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			es: "Placaje",
			de: "Tackle"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card