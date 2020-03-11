import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H5",
	localId: "H5",

	// Card informations
	name: {
		en: "Crobat",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 169,


	evolveFrom: {
		en: "Golbat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kimiya Masago",

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
