import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-34",
	localId: 34,

	// Card informations
	name: {
		en: "Minun",
		fr: "Négapi",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 312,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/34/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/34/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Spark",
			fr: "Étincelle",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
