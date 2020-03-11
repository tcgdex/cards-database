import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-109",
	localId: 109,

	// Card informations
	name: {
		en: "ナッシー[Exeggutor]",
		fr: "ナッシー[Noadkoko]",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/109/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/109/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/109/high",
		},
	},

	evolveFrom: {
		en: "タマタマ[Exeggcute]",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Dr.Ooyama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "ふみつけ[Stomp]",
			fr: "ふみつけ [Écrasement]",
		},
		text: {
			en: "コインを1回投げオモテなら、10ダメージを追加。 Flip a coin. If heads, this attack does 10 more damage.",
			fr: "コインを1回投げオモテなら、10ダメージを追加。\nLancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
