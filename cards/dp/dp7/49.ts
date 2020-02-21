import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-49",
	localId: 49,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Scyther",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/49/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/49/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/49/high",
		},
	},

	evolveFrom: {
		fr: "Insécateur",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
			fr: "Danse-lames",
		},
		text: {
			en: "During your next turn, Scyther's Slashing Strike attack's base damage is 60.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Coup déchirant d'Insécateur sont de 60.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup déchirant",
		},
		text: {
			en: "During your next turn, Scyther can't use Slashing Strike.",
			fr: "Lors de votre prochain tour, Insécateur ne peut pas utiliser Coup déchirant.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
