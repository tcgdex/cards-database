import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [124],
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Its strange cries sound like human language.\nThere are some musicians who compose songs\nfor Jynx to sing.",
		fr: "Ses étranges cris s'apparentent à des mots. Certains musiciens lui composent des chansons pour qu'il les interprète."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Attract Smack",
			fr: "Poutou Grisant"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card