import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		fr: "Ses multiples évolutions lui permettent de s'adapter à tout type de milieu naturel."
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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card