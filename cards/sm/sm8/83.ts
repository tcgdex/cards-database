import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-83",
	localId: 83,

	// Card informations
	name: {
		en: "Stunfisk",
		fr: "Limonde",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 618,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Blast",
			fr: "Grondement de Tonnerre",
		},
		text: {
			en: "Discard a Lightning Energy from this Pokémon.",
			fr: "Défaussez une Énergie Lightning de ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
