import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-180",
	localId: 180,

	// Card informations
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 695,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/180/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/180/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/180/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/180/high",
		},
	},

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Parabolic Counter",
			fr: "Riposte Parabolique",
		},
		text: {
			en: "If your opponent has any Lightning Pokémon in play, this attack does 90 more damage.",
			fr: "Si votre adversaire a au moins un Pokémon Lightning en jeu, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
