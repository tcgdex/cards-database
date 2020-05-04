import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	dexId: 602,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Asako Ito",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Aqua Shock",
			fr: "Choc Aquatique",
		},
		text: {
			en: "If your opponent's Active Pokémon has any Water Energy attached to it, this attack does 30 more damage.",
			fr: "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
