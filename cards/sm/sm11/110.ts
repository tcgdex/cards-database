import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-110",
	localId: 110,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/110/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Pure Power",
			fr: "Force Pure",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Master Strike",
			fr: "Coup de Maître",
		},
		text: {
			en: "If this Pokémon has a Karate Belt card attached to it, this attack does 60 more damage.",
			fr: "Si une carte Ceinture de Karaté est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
