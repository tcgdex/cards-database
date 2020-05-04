import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 666,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/17/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/17/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/17/high",
		},
	},

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Conversion Powder",
			fr: "Poudre Altérante",
		},
		text: {
			en: "Choose either Asleep or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Choisissez soit Endormi, soit Empoisonné. Le Pokémon Actif de votre adversaire est maintenant affecté par l'État Spécial choisi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Colorful Wind",
			fr: "Couleur du Vent",
		},
		text: {
			en: "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque différent type d'Énergie de base attaché à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
