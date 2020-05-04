import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-46",
	localId: 46,

	// Card informations
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 575,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/46/high",
		},
	},

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Deleting Glare",
			fr: "Regard Dépouillant",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à 1 des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
