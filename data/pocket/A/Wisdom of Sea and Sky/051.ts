import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [194],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "This Pokémon lives in cold water. It will leave the\nwater to search for food when it gets cold outside.",
		'fr-fr': "Ce Pokémon vit en eaux froides. Si la température extérieure est assez basse, il lui arrive de se rendre sur la terre ferme pour se nourrir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card