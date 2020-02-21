import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Mr. Mime",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 537,
		type: AbilityType.POKEBODY,
		name: {
			en: "Airy Wall",
		},
		text: {
			en: "If your opponent's Pokémon that has 2 or less Energy cards attached to it attacks Mr. Mime, prevent all damage done to Mr. Mime from that attack. If Mime Jr. is anywhere under Mr. Mime, prevent all effects of that attack, including damage, done to Mr. Mime.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Trick Play",
		},
		text: {
			en: "Put a coin next to your Active Pokémon without showing your opponent and cover it with your hand. Your opponent guesses if the coin is heads or tails. If he or she is wrong, this attack does 50 damage to the Defending Pokémon. If he or she is right, Mr. Mime does 20 damage to itself, and this attack's damage isn't affected by Weakness or Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
