import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom"
	},

	description: {
		en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Catching Tail"
		},

		effect: {
			en: "Once during your turn, you may put a random Pokémon Tool card from your deck into your hand."
		}
	}],

	attacks: [{
		name: {
			en: "Corkscrew Punch"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card