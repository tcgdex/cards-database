import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-53",
	localId: 53,

	// Card informations
	name: {
		en: "Plusle",
		fr: "Posipi",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Draw for Everybody",
			fr: "Pioche Pour Tous",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent's).",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 30
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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
