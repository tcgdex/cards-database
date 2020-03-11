import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-77",
	localId: 77,

	// Card informations
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},

	hp: 100,

	type: [
		Type.FAIRY,
		Type.WATER,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/77/high",
		},
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
