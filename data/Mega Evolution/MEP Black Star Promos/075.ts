import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos",
		de: "Ampharos"
	},

	illustrator: "Taiga Kasai",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",
	dexId: [181],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},

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
		cost: ["Colorless", "Lightning"],

		name: {
			en: "Flashing Bolt"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flashing Bolt."
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 694681
			}
		}
	]
}

export default card
