import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-53",
	localId: 53,

	// Card informations
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 783,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/53/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/53/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/53/high.png",
		},
	},

	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card

