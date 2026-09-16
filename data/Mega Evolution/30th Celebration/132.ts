import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [144],
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	description: {
		en: "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Frosty Flapping"
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Zapdos in play, you may use this Ability. Attach a Basic Water Energy card from your hand to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hail"
		},

		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907740,
				tcgplayer: 716220
			}
		}
	],
}

export default card
