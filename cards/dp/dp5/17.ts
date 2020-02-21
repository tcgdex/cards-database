import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-17",
	localId: 17,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/17/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/17/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/17/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dual Splash",
			fr: "Double splash",
		},
		text: {
			en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf Together",
			fr: "Surf en groupe",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each of your Benched Pokémon. Flip a coin. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon sur votre Banc. Lancez une pièce. Si c'est pile, cette attaque inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
