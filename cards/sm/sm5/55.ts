import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-55",
	localId: 55,

	// Card informations
	name: {
		en: "Drapion",
		fr: "Drascore",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 452,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/55/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/55/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/55/high.png",
		},
	},

	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 121,
		name: "Studio Bora Inc."
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Dangerous Stinger",
			fr: "Dard Redoutable",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

