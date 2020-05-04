import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/8/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/8/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Suwama Chiaki",

	abilities: [{
		id: 448,
		type: AbilityType.POKEBODY,
		name: {
			en: "Aqua Skin",
			fr: "Aqua peau",
		},
		text: {
			en: "When you attach a Water Energy card from your hand to Manaphy, remove 2 damage counters from Manaphy.",
			fr: "Lorsque vous attachez une carte Énergie Water de votre main à Manaphy, retirez-lui 2 marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chase Up",
			fr: "Relancer",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Fountain",
			fr: "Fontaine",
		},
		text: {
			en: "You may attach up to 2 basic Water Energy cards from your hand to your Benched Pokémon in any way you like.",
			fr: "Vous pouvez attacher jusqu'à 2 cartes Énergie de base Water de votre main à vos Pokémon de Banc de la façon que vous voulez.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
