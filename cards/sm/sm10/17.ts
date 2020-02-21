import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-17",
	localId: 17,

	// Card informations
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/17/high",
		},
	},

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bind Down",
			fr: "Astreinte",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chlorowhip",
			fr: "Chlorofouet",
		},
		text: {
			en: "If this Pokémon has at least 2 Grass Energy attached to it, heal 60 damage from this Pokémon.",
			fr: "Si au moins 2 Énergies Grass sont attachées à ce Pokémon, soignez-lui 60 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
