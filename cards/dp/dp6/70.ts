import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-70",
	localId: 70,

	// Card informations
	name: {
		en: "Seadra",
		fr: "Hypocean",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/70/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/70/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/70/high.png",
		},
	},

	evolveFrom: {
		en: "Horsea",
		fr: "Seeper",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Pump",
			fr: "Aqua-pompe",
		},
		text: {
			en: "You may discard up to 2 Water Energy cards from your hand. If you do, this attack does 30 damage plus 10 more damage for each Energy card you discarded.",
			fr: "Vous pouvez défausser jusqu'à 2 cartes Énergie Water de votre main. Cette attaque inflige alors 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

