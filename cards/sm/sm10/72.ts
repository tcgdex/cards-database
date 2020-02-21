import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-72",
	localId: 72,

	// Card informations
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/72/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 107,
		type: AbilityType.TALENT,
		name: {
			en: "Hypnotic Pendulum",
			fr: "Pendule Hypnotique",
		},
		text: {
			en: "When your opponent's Active Pokémon is Knocked Out, flip a coin. If heads, choose which of your opponent's Benched Pokémon becomes their new Active Pokémon.",
			fr: "Lorsque le Pokémon Actif de votre adversaire est mis K.O., lancez une pièce. Si c’est face, choisissez le Pokémon de Banc de votre adversaire qui deviendra son nouveau Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stir the Brain",
			fr: "Remue-Méninges",
		},
		text: {
			en: "This attack does 10 more damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
