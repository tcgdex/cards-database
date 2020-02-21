import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-70",
	localId: 70,

	// Card informations
	name: {
		en: "Zubat",
		fr: "Nosferapti",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 41,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/70/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/70/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissade",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Double Attack",
			fr: "Double attaque",
		},
		text: {
			en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon se trouvant sur le Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun de ces Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
