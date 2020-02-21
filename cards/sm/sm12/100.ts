import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-100",
	localId: 100,

	// Card informations
	name: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 789,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 1071,
		type: AbilityType.TALENT,
		name: {
			en: "Unaware",
			fr: "Inconscient",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.",
			fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
