import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/33/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/33/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Layabout",
			fr: "Traîne-savates",
		},
		text: {
			en: "Remove all damage counters from Snorlax. Snorlax can't use Layabout during your next turn.",
			fr: "Retirez tous ses marqueurs de dégâts à Ronflex. Ronflex ne peut pas utiliser Traîne-savates pendant votre prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clomp Clomp Clobber",
			fr: "Barda abasourdissant",
		},
		text: {
			en: "Put 1 Energy card attached to Snorlax in the Lost Zone.",
			fr: "Placez 1 carte Énergie attachée à Ronflex dans la Zone Perdue.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
