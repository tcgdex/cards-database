import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-140",
	localId: 140,

	// Card informations
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/140/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/140/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/140/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
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
