import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/32/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/32/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/32/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Search and Invite",
			fr: "Rechercher et inviter",
		},
		text: {
			en: "Search your deck for up to 2 Pokémon, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Pokémon dans votre deck, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
