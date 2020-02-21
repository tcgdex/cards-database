import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-81",
	localId: 81,

	// Card informations
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/81/high",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},

	abilities: [{
		id: 1393,
		type: AbilityType.TALENT,
		name: {
			en: "Tag Transport",
			fr: "Porte-Escouade",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch your Active TAG TEAM Pokémon with 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon ESCOUADE Actif avec l’un de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
