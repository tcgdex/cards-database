import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-75",
	localId: 75,

	// Card informations
	name: {
		en: "Stunky",
		fr: "Moufouette",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 434,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gas Bond",
			fr: "Liaison de Gaz",
		},
		text: {
			en: "Both Active Pokémon are now Confused.",
			fr: "Les deux Pokémon Actifs sont maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
