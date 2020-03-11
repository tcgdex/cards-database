import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-155",
	localId: 155,

	// Card informations
	name: {
		en: "Cramorant V",
		fr: "Nigosier V",
	},

	hp: 200,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/155/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/155/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: "aky CG Works",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beak Catch",
			fr: "Bec Gobeur",
		},
		text: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spit Shot",
			fr: "Tir Rejet",
		},
		text: {
			en: "Discard all Energy from this Pokémon. This attack does 160 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
