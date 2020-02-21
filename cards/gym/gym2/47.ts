import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-47",
	localId: 47,

	// Card informations
	name: {
		en: "Koga's Kakuna",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/47/high",
		},
	},

	evolveFrom: {
		en: "Weedle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 38,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Emerge",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for an Evolution card named Koga's Beedrill and put it on Koga's Kakuna. (This counts as evolving Koga's Kakuna.) Shuffle your deck afterward. This power can't be used if Koga's Kakuna is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Toxic Secretion",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
