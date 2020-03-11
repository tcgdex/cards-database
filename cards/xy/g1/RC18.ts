import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC18",
	localId: "RC18",

	// Card informations
	name: {
		en: "Floette",
		fr: "Floette",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 670,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC18/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC18/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC18/high",
		},
	},

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Petal Blizzard",
			fr: "Tempête Florale",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
		},
		damage: 30
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
		name: "Generations",
		code: "g1"
	}
}

export default card
