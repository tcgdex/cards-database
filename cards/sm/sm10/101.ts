import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-101",
	localId: 101,

	// Card informations
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/101/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/101/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Finishing Combo",
			fr: "Combo Finale",
		},
		text: {
			en: "You can use this attack only if your Hitmonlee used Special Combo during your last turn. This attack does 60 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous ne pouvez utiliser cette attaque que si votre Kicklee a utilisé Combo Spéciale lors de votre dernier tour. Cette attaque inflige 60 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
