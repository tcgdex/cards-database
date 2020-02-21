import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-120",
	localId: 120,

	// Card informations
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/120/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 161,
		name: "Ryota Murayama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Retaliate",
			fr: "Vengeance",
		},
		text: {
			en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
			fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Cutter",
			fr: "Tranch’Obscur",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
