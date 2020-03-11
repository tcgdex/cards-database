import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-88",
	localId: 88,

	// Card informations
	name: {
		en: "Xatu",
		fr: "Xatu",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/88/high",
		},
	},

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Gaze",
			fr: "Regard Énergisant",
		},
		text: {
			en: "Your opponent reveals their hand. If you find any Energy cards there, this attack does 60 more damage.",
			fr: "Votre adversaire dévoile sa main. Si vous y trouvez des cartes Énergie, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
