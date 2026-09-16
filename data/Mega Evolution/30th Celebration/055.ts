import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [145],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Flash-Pop Flapping"
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Articuno in play, you may use this Ability. Attach a Basic Lightning Energy card from your hand to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Thundering Lightning"
		},

		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		damage: 210,

		effect: {
			en: "This Pokémon also does 60 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907662,
				tcgplayer: 716455
			}
		}
	],
}

export default card
