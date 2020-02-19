import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-116",
	localId: 116,

	// Card informations
	name: {
		en: "Stonjourner VMAX",
		fr: "Dolman VMAX",
	},

	hp: 330,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/116/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/116/low.png",
		}
	},

	evolveFrom: {
		en: "Stonjourner V",
		fr: "Dolman-V",
	},

	tags: [
		Tag.VMAX,
	],

	illustrator: {
		id: 39,
		name: "5ban Graphics"
	},



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

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
