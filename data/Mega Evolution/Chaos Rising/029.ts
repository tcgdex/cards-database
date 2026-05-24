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
		en: "Ampharos"
	},

	illustrator: "CHORISO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [181],
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Flaaffy"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Synchro Pulse"
		},

		effect: {
			en: "If you have the same number of cards in your hand as your opponent, attacks used by this Pokémon do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Flashing Bolt"
		},

		cost: ["Lightning", "Colorless"],
		damage: 140,

		effect: {
			en: "During your next turn, this Pokémon can't use Flashing Bolt."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693445,
		cardmarket: 886421
	}
}

export default card