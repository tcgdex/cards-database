import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY137",
	localId: "XY137",

	// Card informations
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 666,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY137/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY137/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY137/high",
		},
	},

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dizzying Poison",
			fr: "Poison Étourdissant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Powder",
			fr: "Nuée de Poudre",
		},
		text: {
			en: "This attack does 30 more damage for each Fire Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Fire attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
