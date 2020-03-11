import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-34",
	localId: 34,

	// Card informations
	name: {
		en: "Luxray",
		fr: "Luxray",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/34/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Fang Snipe",
			fr: "Croc Ciblé",
		},
		text: {
			en: "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
			fr: "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
