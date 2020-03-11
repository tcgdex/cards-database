import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-54",
	localId: 54,

	// Card informations
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 784,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/54/high",
		},
	},

	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "so-taro",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Uppercut",
			fr: "Uppercut Enragé",
		},
		text: {
			en: "If this Pokémon has 8 or more damage counters on it, this attack does 120 more damage.",
			fr: "Si ce Pokémon a 8 marqueurs de dégâts ou plus, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
