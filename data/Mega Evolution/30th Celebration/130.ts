import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [146],
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	description: {
		en: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Fiery Flapping"
		},

		effect: {
			en: "Once during your turn, if you have Articuno and Zapdos in play, you may use this Ability. Attach a Basic Fire Energy card from your hand to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Fire Spin"
		},

		cost: ["Fire", "Fire", "Colorless"],

		damage: 130,

		effect: {
			en: "Discard 2 Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907738,
				tcgplayer: 716219
			}
		}
	],
}

export default card
