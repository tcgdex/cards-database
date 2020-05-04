import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/46/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/46/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/46/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: -1,
		type: AbilityType.POKEBODY,
		name: {
			fr: "Bouclier vert",
		},
		text: {
			fr: "Vos Pokémon Grass ne subissent plus la Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharpen",
			fr: "Affûtage",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
