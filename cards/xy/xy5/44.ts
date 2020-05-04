import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-44",
	localId: 44,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/44/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",

	abilities: [{
		id: 1160,
		type: AbilityType.TALENT,
		name: {
			en: "Sparkling Ripples",
			fr: "Ondes Étincelantes",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a card from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez ajouter une carte de votre pile de défausse à votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Swirl",
			fr: "Tourbillon Aquatique",
		},
		text: {
			en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
