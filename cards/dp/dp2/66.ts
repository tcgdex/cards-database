import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Unown M",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

	abilities: [{
		id: 667,
		type: AbilityType.POKEPOWER,
		name: {
			en: "MAGNET",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown M is your Active Pokémon, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Unown M is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage. If tails, this attack does 30 damage to 1 of your Pokémon, and this attack's damage isn't affected by Weakness or Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
