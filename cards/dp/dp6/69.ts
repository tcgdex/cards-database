import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-69",
	localId: 69,

	// Card informations
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/69/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/69/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/69/high.png",
		},
	},

	evolveFrom: {
		en: "Swinub",
		fr: "Quiekel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Charge Dash",
			fr: "Attaque précipitée",
		},
		text: {
			en: "You may do 30 damage plus 30 more damage. If you do, Piloswine does 30 damage to itself.",
			fr: "Vous pouvez infliger 30 dégâts plus 30 dégâts supplémentaires. Cochignon s'inflige alors 30 dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent glacé",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

