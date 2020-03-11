import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-104",
	localId: 104,

	// Card informations
	name: {
		en: "Steelix",
		fr: "Steelix",
	},

	hp: 170,

	type: [
		Type.FIGHTING,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/104/high",
		},
	},

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Ground Stream",
			fr: "Ruisseau Terrestre",
		},
		text: {
			en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigaton Shake",
			fr: "Secousse Gigatonne",
		},
		text: {
			en: "During your next turn, your Pokémon can't attack. (This includes Pokémon that come into play on that turn.)",
			fr: "Pendant votre prochain tour, vos Pokémon ne peuvent pas attaquer. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
		},
		damage: 220
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
