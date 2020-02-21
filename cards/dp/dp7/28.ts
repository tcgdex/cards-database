import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-28",
	localId: 28,

	// Card informations
	name: {
		en: "Steelix",
		fr: "Steelix",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/28/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/28/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/28/high",
		},
	},

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Outbreak Power",
			fr: "Éruption de pouvoir",
		},
		text: {
			en: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Steelix. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez autant de Pokémon de votre adversaire qu'il y a d'Énergie attachée à Steelix. Cette attaque inflige 20 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Tail",
			fr: "Queue de fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 100 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 100 dégâts multipliés par le nombre de faces.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
