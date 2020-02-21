import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-22",
	localId: 22,

	// Card informations
	name: {
		en: "Gastrodon West Sea",
		fr: "Tritosor Mer Occident Niv. 50",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 423,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/22/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/22/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/22/high",
		},
	},

	evolveFrom: {
		en: "Shellos West Sea",
		fr: "Sancoki Mer Occident",
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
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Muddy Bomb",
			fr: "Bombe boueuse",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon and 10 damage to each of your opponent's other Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts et 10 dégâts à chacun des autres Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Sea",
			fr: "Mer enragée",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires à chacun de vos Pokémon de Banc possédant des marqueurs de dégât.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
