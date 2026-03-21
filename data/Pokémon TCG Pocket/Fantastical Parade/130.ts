import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Smeargle"
	},

	illustrator: "Sekio",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "The color of the mysterious fluid secreted from\nthe tip of the tail is predetermined for each\nSmeargle."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Portrait"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at a random Supporter card from your opponent's hand. Use the effect of that card as the effect of this Ability."
		}
	}],

	attacks: [{
		name: {
			en: "Tail Whap"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card