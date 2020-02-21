import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-AR1",
	localId: "AR1",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR1/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR1/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Prize Count",
			fr: "Compteur de Récompense",
		},
		text: {
			en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 60 more damage.",
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
