import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-40",
	localId: 40,

	// Card informations
	name: {
		en: "Lumineon",
		fr: "Luminéon",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 457,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/40/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/40/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/40/high.png",
		},
	},

	evolveFrom: {
		en: "Finneon",
		fr: "Écayon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Neon Trickery",
			fr: "Supercherie Néon",
		},
		text: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

