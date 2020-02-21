import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-17",
	localId: 17,

	// Card informations
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 655,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/17/high",
		},
	},

	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1142,
		type: AbilityType.TALENT,
		name: {
			en: "Mystical Torch",
			fr: "Torche Mystique",
		},
		text: {
			en: "Once during your turn (before your attack), you may leave your opponent's Active Pokémon Burned.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
			fr: "Danse Flamme",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
