import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Wooper",
		fr: "Axoloto"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [194],
	hp: 70,
	types: ["Water"],

	description: {
		en: "This Pokémon lives in cold water. It will leave the\nwater to search for food when it gets cold outside.",
		fr: "Ce Pokémon vit en eaux froides. Si la température extérieure est assez basse, il lui arrive de se rendre sur la terre ferme pour se nourrir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante"
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