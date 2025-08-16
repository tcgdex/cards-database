import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [786],
	set: Set,

	name: {
		en: "Tapu Lele GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wonder Tag"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			en: "Energy Drive"
		},

		effect: {
			en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn't affected by Weakness or Resistance."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Tapu Cure GX"
		},

		effect: {
			en: "Heal all damage from 2 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)"
		},

		cost: ["Psychic"]
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576795
	}
}

export default card
