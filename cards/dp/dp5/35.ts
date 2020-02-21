import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-35",
	localId: 35,

	// Card informations
	name: {
		en: "Ambipom",
		fr: "Capidextre",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 424,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/35/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/35/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/35/high",
		},
	},

	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de mélanger cette carte à son deck.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hang High",
			fr: "Haut perché",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
