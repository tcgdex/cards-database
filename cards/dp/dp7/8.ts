import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp7/8/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/8/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/8/high.png",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



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



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

