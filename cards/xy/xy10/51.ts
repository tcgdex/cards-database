import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-51",
	localId: 51,

	// Card informations
	name: {
		en: "Carbink BREAK",
		fr: "Strassie TURBO",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/51/high",
		},
	},

	evolveFrom: {
		en: "Carbink",
		fr: "Strassie",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Diamond Gift",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Attach 2 Energy cards from your discard pile to 1 of your Fighting Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			fr: "Cadeau de Diamant",
		},
		text: {
			fr: "Attachez 2 cartes Énergie de votre pile de défausse à l'un de vos Pokémon Fighting.",
		},
		damage: 20
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
