import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-13",
	localId: 13,

	// Card informations
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 591,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/13/high",
		},
	},

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Crazy Spore",
			fr: "Spore Folle",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Strange Reaction",
			fr: "Étrange Réaction",
		},
		text: {
			en: "If your opponent's Active Pokémon is Confused, it is now Paralyzed.",
			fr: "Si le Pokémon Actif de votre adversaire est Confus, il est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
