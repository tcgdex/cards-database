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
		en: "Donphan"
	},

	illustrator: "Julie Hang",
	rarity: "Common",
	category: "Pokemon",
	dexId: [232],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "No Reprieve"
		},

		cost: ["Fighting"],
		damage: 20,

		effect: {
			en: "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}, {
		name: {
			en: "Smashing Headbutt"
		},

		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		damage: 180,

		effect: {
			en: "Discard 2 Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693478
	}
}

export default card