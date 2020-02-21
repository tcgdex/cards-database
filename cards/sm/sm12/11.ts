import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-11",
	localId: 11,

	// Card informations
	name: {
		en: "Cradily",
		fr: "Vacilys",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 346,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/11/high",
		},
	},

	evolveFrom: {
		en: "Lileep",
		fr: "Lilia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 136,
		name: "otumami"
	},

	abilities: [{
		id: 1371,
		type: AbilityType.TALENT,
		name: {
			en: "Swaying Strangle",
			fr: "Balancement Enserrant",
		},
		text: {
			en: "Your opponent's Pokémon that are affected by Special Conditions can't retreat.",
			fr: "Les Pokémon de votre adversaire qui sont affectés pas un État Spécial ne peuvent pas battre en retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Tentacles",
			fr: "Tentacules Empoisonnés",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
