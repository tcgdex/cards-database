import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-89",
	localId: 89,

	// Card informations
	name: {
		en: "Type: Null",
		fr: "Type:0",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 772,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Armor Press",
			fr: "Pression Cuirassée",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
