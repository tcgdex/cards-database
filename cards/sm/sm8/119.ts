import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-119",
	localId: 119,

	// Card informations
	name: {
		en: "Alolan Persian",
		fr: "Persian d’Alola",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/119/high",
		},
	},

	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		name: {
			en: "Empty Threat",
			fr: "Menace en l’Air",
		},
		text: {
			en: "This attack does 30 less damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts de moins multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
