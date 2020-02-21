import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-64",
	localId: 64,

	// Card informations
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/64/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/64/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/64/high",
		},
	},

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Exact Revenge",
			fr: "Vengeance Exigée",
		},
		text: {
			en: "If any of your Psychic Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 70 more damage.",
			fr: "Si l’un de vos Pokémon Psychic a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
