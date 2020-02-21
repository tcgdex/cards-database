import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/38/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/38/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/38/high",
		},
	},

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 748,
		type: AbilityType.POKEBODY,
		name: {
			en: "Boost Gas",
			fr: "Gazoboost",
		},
		text: {
			en: "If Pupitar has any Energy attached to it, the Retreat Cost for Pupitar is 0.",
			fr: "Si une ou plusieurs cartes Énergie sont attachées à Ymphect, le Coût de retraite de ce dernier est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Pupitar.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Ymphect.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
