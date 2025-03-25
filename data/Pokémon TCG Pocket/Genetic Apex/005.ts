import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Caterpie",
		fr: "Chenipan"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami"
		},

		effect: {
			en: "Put 1 random G Pokémon from your deck into your hand.",
			fr: "Ajoutez au hasard un Pokémon G de votre deck à votre main."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
		fr: "Pour se protéger, il émet par ses antennes une odeur nauséabonde qui fait fuir ses ennemis."
	}
}

export default card
