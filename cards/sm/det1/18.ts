import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "det1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/18/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/18/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/18/high",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pitch",
			fr: "Lancer",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
