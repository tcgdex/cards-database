import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-20",
	localId: 20,

	// Card informations
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/20/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/20/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/20/high.png",
		},
	},

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "This Pokémon is now Asleep. Heal 90 damage from it.",
			fr: "Ce Pokémon est maintenant Endormi. Soignez 90 dégâts à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

