import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank",
		fr: "Écrémeuh"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [241],
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "This Pokémon needs to be milked every day,\nor else it will fall ill. The flavor of Miltank milk\nchanges with the seasons."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Body Slam",
			fr: "Plaquage"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card