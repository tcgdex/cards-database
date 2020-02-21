import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-14",
	localId: 14,

	// Card informations
	name: {
		en: "Cherrim",
		fr: "Cherrim",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/14/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/14/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/14/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 695,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sunny Day",
			fr: "Zénith",
		},
		text: {
			en: "Each of your Grass Pokémon and Fire Pokémon's attacks does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			fr: "Chacune des attaques de vos Pokémon Grass et Fire inflige 10 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		name: {
			en: "Salty-sweet Pollen",
			fr: "Pollen sucré-salé",
		},
		text: {
			en: "Remove 2 damage counters from 1 of your Pokémon.",
			fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solarbeam",
			fr: "Lance-soleil",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
