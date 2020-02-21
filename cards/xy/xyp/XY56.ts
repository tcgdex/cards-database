import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY56",
	localId: "XY56",

	// Card informations
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY56/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY56/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY56/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Nurse's Egg",
			fr: "Œuf Soin",
		},
		text: {
			en: "Heal 100 damage from each of your Benched Pokémon. Then, discard 2 Energy attached to this Pokémon.",
			fr: "Soignez 100 dégâts à chacun de vos Pokémon de Banc. Ensuite, défaussez 2 Énergies attachées à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
