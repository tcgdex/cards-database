import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-77",
	localId: 77,

	// Card informations
	name: {
		en: "Zweilous",
		fr: "Diamat",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/77/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/77/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/77/high",
		},
	},

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
