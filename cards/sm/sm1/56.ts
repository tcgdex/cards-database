import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-56",
	localId: 56,

	// Card informations
	name: {
		en: "Crobat",
		fr: "Nostenfer",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/56/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/56/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/56/high",
		},
	},

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "DemizuPosuka",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Triple Poison",
			fr: "Triple Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Strike",
			fr: "Frappe Surprise",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
