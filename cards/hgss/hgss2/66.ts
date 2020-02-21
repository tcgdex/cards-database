import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Tropius",
		fr: "Tropius",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/66/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/66/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Green Call",
			fr: "Appel de la verdure",
		},
		text: {
			en: "Flip 2 coins. For each heads, search your deck for a Grass Pokémon, show it to your opponent, and put it into your hand. If you do, shuffle your deck afterward.",
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez un Pokémon Grass dans votre deck, montrez-le à votre adversaire, puis ajoutez-le à votre main. Dans ce cas, mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
