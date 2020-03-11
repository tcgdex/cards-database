import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-32",
	localId: 32,

	// Card informations
	name: {
		en: "Blacephalon",
		fr: "Pierroteknik",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 806,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Blazer",
			fr: "Brasero",
		},
		text: {
			en: "Turn 1 of your face-down Prize cards face up. If it's a Fire Energy card, this attack does 50 more damage. (That Prize card remains face up for the rest of the game.)",
			fr: "Retournez l’une de vos cartes Récompense (actuellement face cachée) face découverte. Si c’est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires. (Cette carte Récompense reste face découverte pour le reste de la partie.)",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fireball Circus",
			fr: "Cirque Boule de Feu",
		},
		text: {
			en: "Discard any number of Fire Energy cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez autant de cartes Énergie Fire que vous le voulez de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
