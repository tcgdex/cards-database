import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Carnivine"
	},

	illustrator: "Heisuke Kitazawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [455],
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite Whole"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 80,

		effect: {
			en: "This attack does 80 more damage for each in your opponent's Active Pokémon's Retreat Cost."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693459
	}
}

export default card