import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-62",
	localId: 62,

	// Card informations
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 681,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/62/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/62/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/62/high",
		},
	},

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Painful Sword",
			fr: "Lame Douloureuse",
		},
		text: {
			en: "Double the number of damage counters on each of your opponent's Pokémon.",
			fr: "Doublez le nombre de marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Slash",
			fr: "Tranche Mégatonne",
		},
		text: {
			en: "This attack does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
