import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Cleffa",
		fr: "Mélo",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/17/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/17/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
			fr: "Joli visage endormi",
		},
		text: {
			en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
			fr: "Tant que Mélo reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Eeeeeeek",
			fr: "Arheuuuuu",
		},
		text: {
			en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
			fr: "Mélangez votre main avec votre deck, piochez ensuite 6 cartes. Mélo est maintenant Endormi.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
