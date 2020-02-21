import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-55",
	localId: 55,

	// Card informations
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1149,
		type: AbilityType.TALENT,
		name: {
			en: "Vital Dance",
			fr: "Danse Vitale",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher jusqu’à 2 cartes Énergie de base dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Casual Slap",
			fr: "Gifle Amicale",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
