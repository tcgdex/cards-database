import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-102",
	localId: 102,

	// Card informations
	name: {
		en: "Toxicroak-EX",
		fr: "Coatox-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/102/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/102/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Poison",
			fr: "Triple Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Smash Uppercut",
			fr: "Poing Fracassant",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
