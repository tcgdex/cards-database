import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-6",
	localId: 6,

	// Card informations
	name: {
		en: "Crobat",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/6/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 120,
		name: "Kimiya Masago"
	},

	abilities: [{
		id: 1308,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Carry Off",
		},
		text: {
			en: "Once during your turn (before you attack) you may flip a coin. If heads, look at your opponent's hand. If your opponent has and Baby Pokémon, Basic Pokémon, of Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Crobat is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Cross",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the defending Pokémon is now Confused and Poisoned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
