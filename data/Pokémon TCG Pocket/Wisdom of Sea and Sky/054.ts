import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Corsola",
		fr: "Corayon"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "It will regrow any branches that break off its\nhead. People keep particularly beautiful Corsola\nbranches as charms to promote safe childbirth.",
		fr: "Ses branches repoussent si elles sont brisées. Les plus belles sont offertes aux futures mamans comme porte-bonheurs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Find a Friend",
			fr: "Trouver un Ami"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put a random Pokémon from your deck into your hand.",
			fr: "Ajoutez au hasard un Pokémon de votre deck à votre main."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card