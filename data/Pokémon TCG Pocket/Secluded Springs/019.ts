import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [124],
	hp: 70,
	types: ["Water"],

	description: {
		en: "Its strange cries sound like human language.\nThere are some musicians who compose songs\nfor Jynx to sing.",
		fr: "Ses étranges cris s'apparentent à des mots. Certains musiciens lui composent des chansons pour qu'il les interprète."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante"
		},

		damage: 40,
		cost: ["Water", "Water"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card