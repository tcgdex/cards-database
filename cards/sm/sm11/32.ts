import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-32",
	localId: 32,

	// Card informations
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 663,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/32/high",
		},
	},

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Heat Wave",
			fr: "Canicule",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Raid",
			fr: "Raid Flamboyant",
		},
		text: {
			en: "Discard an Energy from this Pokémon. This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez une Énergie de ce Pokémon. Cette attaque inflige 50 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
