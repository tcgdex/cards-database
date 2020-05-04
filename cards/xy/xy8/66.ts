import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-66",
	localId: 66,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/66/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/66/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/66/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",

	abilities: [{
		id: 752,
		type: AbilityType.TALENT,
		name: {
			en: "Twisted Incantation",
			fr: "Incantation Maléfique",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck and draw a card for each of his or her remaining Prize cards.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main dans son deck et de piocher une carte pour chacune des cartes Récompense qu'il lui reste.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Curse Deeply",
			fr: "Malédiction Intense",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
