import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-32",
	localId: 32,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/32/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/32/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/32/high",
		},
	},

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Speed Evolution",
			fr: "Évolution rapide",
		},
		text: {
			en: "Search your deck for a card that evolves from Kakuna and put it onto Kakuna. (This counts as evolving Kakuna.) Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Évolution de Coconfort et placez-la sur Coconfort (cela équivaut à faire évoluer Coconfort). Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
