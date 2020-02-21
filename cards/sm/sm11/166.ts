import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-166",
	localId: 166,

	// Card informations
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/166/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/166/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/166/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/166/high",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blindside",
			fr: "Angle Mort",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
		},
		damage: 60
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
