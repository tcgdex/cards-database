import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-147",
	localId: 147,

	// Card informations
	name: {
		en: "Crobat",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/147/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/147/high.png",
		},
	},

	evolveFrom: {
		en: "Golbat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Grass, Fire, or Psychic basic Energy card from your hand to Crobat, Crobat's type (color) becomes the same as that type of energy until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Poison Flame",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned and Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Squared Attack",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
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

