import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan",
		de: "Kangama"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [115],
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "Although it's carrying its baby in a pouch on\nits belly, Kangaskhan is swift on its feet. It\nintimidates its opponents with quick jabs.",
		de: "Obwohl es sein Junges im Beutel trägt, bewegt sich dieses Pokémon äußerst leichtfüßig. Gegner schreckt Kangama mit blitzschnellen Schlägen ab."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cross-Cut",
			de: "Überkreuzzerschneider"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 40 more damage.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card