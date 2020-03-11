import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-19",
	localId: 19,

	// Card informations
	name: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 723,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/19/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/19/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/19/high",
		},
	},

	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leafage",
			fr: "Feuillage",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Flick",
			fr: "Battement d’Aile",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
