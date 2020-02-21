import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-62",
	localId: 62,

	// Card informations
	name: {
		en: "Luxio",
		fr: "Luxio",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 404,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/62/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/62/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/62/high",
		},
	},

	evolveFrom: {
		en: "Shinx",
		fr: "Sheinux",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Spark",
			fr: "Étincelle",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts  à  1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunderous Claw",
			fr: "Griffe-tonnerre",
		},
		text: {
			en: "Flip a coin. If tails, discard all Lightning Energy attached to Luxio.",
			fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies Lightning attachées à Luxio.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
