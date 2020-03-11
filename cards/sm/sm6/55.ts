import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-55",
	localId: 55,

	// Card informations
	name: {
		en: "Poipole",
		fr: "Vémini",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 803,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spit Poison",
			fr: "Crache-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Knockout Reviver",
			fr: "K.O. Futile",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
