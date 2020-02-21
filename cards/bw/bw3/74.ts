import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-74",
	localId: 74,

	// Card informations
	name: {
		en: "Landorus",
		fr: "Démétéros",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 645,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/74/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/74/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Abundant Harvest",
			fr: "Récolte Abondante",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Gaia Hammer",
			fr: "Marteau de Gaïa",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
