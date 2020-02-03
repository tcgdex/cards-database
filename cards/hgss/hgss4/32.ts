import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/32/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/32/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/32/high.png",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

