import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-71",
	localId: 71,

	// Card informations
	name: {
		en: "Whiscash",
		fr: "Barbicha",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 340,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/71/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/71/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/71/high",
		},
	},

	evolveFrom: {
		en: "Barboach",
		fr: "Barloche",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Landslip",
			fr: "Affaissement de Terrain",
		},
		text: {
			en: "Discard the top 3 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
