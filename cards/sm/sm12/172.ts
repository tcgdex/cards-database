import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-172",
	localId: 172,

	// Card informations
	name: {
		en: "Ursaring",
		fr: "Ursaring",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 217,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/172/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/172/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/172/high",
		},
	},

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 139,
		name: "Hiroki Asanuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Hold",
			fr: "Prise Étau",
		},
		text: {
			en: "The Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
