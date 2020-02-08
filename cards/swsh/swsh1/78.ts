import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-78",
	localId: 78,

	// Card informations
	name: {
		en: "Morpeko",
		fr: "Morpeko",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/78/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/78/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Attack the Wound",
			fr: "Défi de la Plaie",
		},
		text: {
			en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
