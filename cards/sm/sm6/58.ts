import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-58",
	localId: 58,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/58/high",
		},
	},

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-Sangsue",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "This attack does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
