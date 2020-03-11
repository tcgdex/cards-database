import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Mime Jr.",
		fr: "Mime Jr.",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 439,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/47/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/47/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
			fr: "Joli visage endormi",
		},
		text: {
			en: "As long as Mime Jr. is Asleep, prevent all damage done to Mime Jr. by attacks.",
			fr: "Tant que Mime Jr. est Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Sleepy Lost",
			fr: "Berceuse perdue",
		},
		text: {
			en: "Put the top card of your opponent's deck in the Lost Zone. Mime Jr. is now Asleep.",
			fr: "Placez la carte du dessus du deck de votre adversaire dans la Zone Perdue. Mime Jr. est maintenant Endormi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
