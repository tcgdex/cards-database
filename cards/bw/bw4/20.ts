import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-20",
	localId: 20,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/20/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Burst",
			fr: "Rebondifeu",
		},
		text: {
			en: "Does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Inferno",
			fr: "Feu d'Enfer",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
