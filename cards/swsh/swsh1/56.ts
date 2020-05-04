import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Drizzile",
		fr: "Arrozard",
	},

	hp: 90,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/56/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/56/low",
		}
	},

	evolveFrom: {
		en: "Sobble",
		fr: "Larméléon",
	},

	evolveTo: [{
		en: "Inteleon",
		fr: "Lézargus",
	}],

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Shady Dealings",
			fr: "Affaires Louches",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck une carte Dresseur, la révéler, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
