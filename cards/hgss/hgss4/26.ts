import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-26",
	localId: 26,

	// Card informations
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/26/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/26/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/26/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Vital Throw",
			fr: "Corps perdu",
		},
		text: {
			en: "You may do 40 damage plus 20 more damage. If you do, Machamp does 20 damage to itself.",
			fr: "Vous pouvez infliger 40 dégâts plus 20 dégâts supplémentaires. Dans ce cas, Mackogneur s'inflige 20 dégâts.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hundred Furious Punches",
			fr: "Multipoings furieux",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each Fighting Energy attached to Machamp.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Fighting attachée à Mackogneur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
