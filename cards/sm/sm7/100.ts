import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-100",
	localId: 100,

	// Card informations
	name: {
		en: "Celesteela",
		fr: "Bamboiselle",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 797,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Raker",
			fr: "Ratissage Lunaire",
		},
		text: {
			en: "If the total of both players' remaining Prize cards is exactly 6, this attack can be used for Metal.",
			fr: "S’il reste exactement 6 cartes Récompense aux deux joueurs réunis, cette attaque peut être utilisée pour Metal.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
