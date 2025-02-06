import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Data Scan"
		},

		effect: {
			en: "Once during your turn, you may look at the top card of your deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharpen"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
	}
}

export default card
