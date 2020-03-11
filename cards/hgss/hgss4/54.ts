import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-54",
	localId: 54,

	// Card informations
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/54/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/54/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/54/high",
		},
	},

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Shoot Through",
			fr: "Passer à travers",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "U-turn",
			fr: "Demi-Tour",
		},
		text: {
			en: "Switch Yanmega with 1 of your Benched Pokémon.",
			fr: "Échangez Yanmega avec l'un de vos Pokémon de Banc.",
		},
		damage: 50
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
