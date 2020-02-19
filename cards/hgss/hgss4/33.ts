import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-33",
	localId: 33,

	// Card informations
	name: {
		en: "Electabuzz",
		fr: "Elektek",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 125,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/33/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/33/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/33/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Light Punch",
			fr: "Poing léger",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shock Bolt",
			fr: "Choc'éclair",
		},
		text: {
			en: "Flip a coin. If tails, discard all Lightning Energy attached to Electabuzz.",
			fr: "Lancez une pièce. Si c'est pile, défaussez toutes les cartes Énergie Lightning attachées à Elektek.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

