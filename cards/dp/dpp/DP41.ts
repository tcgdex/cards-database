import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP41",
	localId: "DP41",

	// Card informations
	name: {
		en: "Toxicroak G",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryota Saito",

	abilities: [{
		id: 855,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Leap Away",
		},
		text: {
			en: "Once during your turn (before your attack), if Toxicroak  is your Active Pokémon, you may flip a coin. If heads, return Toxicroak  and all cards attached to it to your hand. This Power can't be used if Toxicroak  is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Revenge",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
