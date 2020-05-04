import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-109",
	localId: 109,

	// Card informations
	name: {
		en: "Purugly",
		fr: "Chaffreux",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 432,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/109/high",
		},
	},

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Own the Place",
			fr: "Propriétaire des Lieux",
		},
		text: {
			en: "If your opponent has a Stadium card in play, discard it. If you do, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toss Aside",
			fr: "Rejeter",
		},
		text: {
			en: "Discard random cards from your opponent's hand until they have 3 cards in their hand.",
			fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu’à ce qu’il ait 3 cartes dans sa main.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
