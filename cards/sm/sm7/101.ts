import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-101",
	localId: 101,

	// Card informations
	name: {
		en: "Kartana",
		fr: "Katagami",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 798,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/101/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/101/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Divine Paper",
			fr: "Papier Sublime",
		},
		text: {
			en: "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
			fr: "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

