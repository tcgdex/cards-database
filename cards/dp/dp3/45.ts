import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-45",
	localId: 45,

	// Card informations
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/45/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/45/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/45/high.png",
		},
	},

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Drain Punch",
			fr: "Vampipoing",
		},
		text: {
			en: "Remove from Breloom a number of damage counters equal to the amount of Energy attached to the Defending Pokémon.",
			fr: "Retirez à Chapignon autant de marqueurs de dégât qu'il y a d'Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Homing Uppercut",
			fr: "Uppercut à tête chercheuse",
		},
		text: {
			en: "If the Defending Pokémon's Retreat Cost is 0, this attack does 60 damage plus 60 more damage.",
			fr: "Si le Coût de retraite du Pokémon Défenseur est de 0, cette attaque inflige 60 dégâts plus 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

