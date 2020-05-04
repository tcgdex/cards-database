import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-13",
	localId: 13,

	// Card informations
	name: {
		en: "Ambipom",
		fr: "Capidextre",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 424,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/13/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/13/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/13/high",
		},
	},

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Choose 2 cards from your opponent's hand without looking. Look at the cards you chose, then have your opponent shuffle those cards into his or her deck.",
			fr: "Choisissez au hasard 2 cartes dans la main de votre adversaire. Regardez les cartes que vous avez choisies, puis demandez à votre adversaire de les mélanger avec son deck.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Spank",
			fr: "Matraqueue",
		},
		text: {
			en: "Discard 2 cards from your hand. (If you can't discard 2 cards from your hand, this attack does nothing.)",
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas, cette attaque ne fait rien.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
