import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-21",
	localId: 21,

	// Card informations
	name: {
		en: "Talonflame BREAK",
		fr: "Flambusard TURBO",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 663,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/21/high",
		},
	},

	evolveFrom: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Blitz",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard all Fire Energy attached to this Pokémon.",
		},
		damage: 150
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			fr: "Boutefeu",
		},
		text: {
			fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
		},
		damage: 150
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
