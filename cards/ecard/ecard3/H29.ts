import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H29",
	localId: "H29",

	// Card informations
	name: {
		en: "Steelix",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 208,


	evolveFrom: {
		en: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hikaru Koike",

	abilities: [{
		id: 463,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rare Metal",
		},
		text: {
			en: "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Squeeze",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Tail",
		},
		text: {
			en: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
