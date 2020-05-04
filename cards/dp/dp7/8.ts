import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-8",
	localId: 8,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/8/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/8/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/8/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {
			en: "Slice",
			fr: "Mettre en tranche",
		},
		text: {
			en: "Raichu can't use Slice during your next turn.",
			fr: "Raichu ne peut pas utiliser Mettre en tranche lors de votre prochain tour.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Split Ball",
			fr: "Balle coupée",
		},
		text: {
			en: "Move an Energy card attached to Raichu to 1 of your Benched Pokémon.",
			fr: "Déplacez une carte Énergie attachée à Raichu sur 1 de vos Pokémon de Banc.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Burst Ball",
			fr: "Balle explosive",
		},
		text: {
			en: "Discard 3 Energy attached to any of your Pokémon in any way you like.",
			fr: "Défaussez 3 Énergies attachées à n'importe lequel de vos Pokémon de la façon que vous voulez.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
