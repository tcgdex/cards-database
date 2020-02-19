import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Metalosse",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/18/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/18/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/18/high.png",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 70
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quad Smash",
			fr: "Quadruple destruction",
		},
		text: {
			en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

