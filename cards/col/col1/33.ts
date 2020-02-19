import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/col/col1/33/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/33/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/33/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



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

