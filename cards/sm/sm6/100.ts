import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-100",
	localId: 100,

	// Card informations
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 714,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destructive Sound",
			fr: "Son Destructeur",
		},
		text: {
			en: "Your opponent reveals their hand. Discard all Item cards you find there.",
			fr: "Votre adversaire dévoile sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
