import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-95",
	localId: 95,

	// Card informations
	name: {
		en: "Zweilous",
		fr: "Diamat",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/95/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/95/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/95/high",
		},
	},

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
