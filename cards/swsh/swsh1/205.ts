import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-205",
	localId: 205,

	// Card informations
	name: {
		en: "Stonjourner VMAX",
		fr: "Dolman VMAX",
	},

	hp: 330,

	type: [
		Type.FIGHTING,
	],


	evolveFrom: {
		en: "Stonjourner V",
		fr: "Dolman-V",
	},

	tags: [
		Tag.VMAX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Stone Gift",
			fr: "Cadeau Roc",
		},
		text: {
			en: "Attach a Fighting Energy card from your hand to 1 of your Pokémon. If you do, heal 120 damage from that Pokémon.",
			fr: "Attachez une carte Énergie Fighting de votre main à l’un de vos Pokémon. Dans ce cas, soignez 120 dégâts de ce Pokémon-là.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Max Rockfall",
			fr: "Lithomax",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
