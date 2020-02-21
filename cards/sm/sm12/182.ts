import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-182",
	localId: 182,

	// Card informations
	name: {
		en: "Bewear",
		fr: "Chelours",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 760,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/182/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/182/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/182/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/182/high",
		},
	},

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 1387,
		type: AbilityType.TALENT,
		name: {
			en: "Carry and Run",
			fr: "Attrape et Cours",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
			fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lariat",
			fr: "Lasso",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
