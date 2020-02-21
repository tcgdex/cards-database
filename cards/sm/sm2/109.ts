import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-109",
	localId: 109,

	// Card informations
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 661,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Growl",
			fr: "Rugissement",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
