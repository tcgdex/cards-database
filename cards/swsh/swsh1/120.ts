import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-120",
	localId: 120,

	// Card informations
	name: {
		en: "Sableye V",
		fr: "Ténéfix V",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/120/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/120/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Lode Search",
			fr: "Recherche du Filon",
		},
		text: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Crazy Claws",
			fr: "Griffes Folles",
		},
		text: {
			en: "This attack does 60 more damage for each damage counter on your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
