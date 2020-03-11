import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-108",
	localId: 108,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/108/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Croissance α",
		},
		text: {
			fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gather Strength",
			fr: "Pouvoir Collecté",
		},
		text: {
			en: "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Blast",
			fr: "Explo-Draco",
		},
		text: {
			en: "Discard a Water Energy and a Lightning Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Water et une Énergie Lightning attachées à ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
