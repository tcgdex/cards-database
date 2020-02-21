import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-H4",
	localId: "H4",

	// Card informations
	name: {
		en: "Azumarill",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/H4/high",
		},
	},

	evolveFrom: {
		en: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 999,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Bubble Turn",
		},
		text: {
			en: "Once during your turn (before your attack), if Azumarill is on your bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Sonic",
		},
		text: {
			en: "Don't apply Resistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
