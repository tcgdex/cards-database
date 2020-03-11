import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-59",
	localId: 59,

	// Card informations
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/59/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
			fr: "Traîne",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 50 damage to the new Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "King's Drum",
			fr: "Tambour du Souverain",
		},
		text: {
			en: "If Nidoqueen is on your Bench, this attack does 100 more damage.",
			fr: "Si Nidoqueen est sur votre Banc, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
