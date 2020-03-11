import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-83",
	localId: 83,

	// Card informations
	name: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 88,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/83/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/83/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chemical Breath",
			fr: "Souffle Chimique",
		},
		text: {
			en: "This attack does 50 more damage for each Special Condition affecting your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
