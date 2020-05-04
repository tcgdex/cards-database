import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-14",
	localId: 14,

	// Card informations
	name: {
		en: "Reshiram",
		fr: "Reshiram",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Outrage",
			fr: "Colère",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Breath",
			fr: "Souffle Brûlant",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
