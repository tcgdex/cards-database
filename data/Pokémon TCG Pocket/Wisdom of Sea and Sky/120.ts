import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [359],
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Swift as the wind, Absol races through fields and\nmountains. Its curved, bow-like horn is acutely\nsensitive to the warning signs of natural disasters.",
		fr: "Il court par monts et par vaux, rapide comme le vent. Sa corne arquée lui permet de percevoir les signes avant-coureurs des cataclysmes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leap Over",
			fr: "Élan Bondissant"
		},

		cost: ["Darkness"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card