import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-21",
	localId: 21,

	// Card informations
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/21/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/21/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/21/high",
		},
	},

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {
			en: "Vacuum Sand",
			fr: "Sable aspirant",
		},
		text: {
			en: "Search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
			fr: "Cherchez dans votre pile de défausse une carte Énergie Fighting et attachez-la à Hippodocus.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Impact",
			fr: "Impact sablonneux",
		},
		text: {
			en: "Flip a coin for each Fighting Energy attached to Hippowdon. This attack does 50 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Fighting attachée à Hippodocus. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
