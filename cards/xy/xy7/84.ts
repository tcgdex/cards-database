import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-84",
	localId: 84,

	// Card informations
	name: {
		en: "Sceptile-EX",
		fr: "Jungko-EX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/84/high",
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
			Type.GRASS
		],
		name: {
			en: "Sleep Poison",
			fr: "Poison Dodo",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Unseen Claw",
			fr: "Griffe Invisible",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
