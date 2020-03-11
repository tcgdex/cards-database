import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-60",
	localId: 60,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/60/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/60/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/60/high",
		},
	},

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mirror Step",
			fr: "Pas Dupliqué",
		},
		text: {
			en: "If 1 of your opponent's Pokémon in play has the same name as 1 of your Pokémon in play, this attack does 70 more damage.",
			fr: "Si l’un des Pokémon en jeu de votre adversaire a le même nom que l’un de vos Pokémon en jeu, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
