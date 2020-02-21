import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-62",
	localId: 62,

	// Card informations
	name: {
		en: "Shieldon",
		fr: "Dinoclier",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 410,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/62/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/62/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/62/high",
		},
	},

	evolveFrom: {
		en: "Armor Fossil",
		fr: "Fossile armure",
	},

	tags: [
		Tag.STAGE1,
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
			en: "Endure",
			fr: "Ténacité",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, if Shieldon would be Knocked Out by damage from an attack, Shieldon is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Lancez une pièce. Si c'est face, lors du prochain tour de votre adversaire, si Dinoclier est mis K.O par les dégâts d'une attaque, il n'est pas mis K.O mais il ne lui reste que 10 PV.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
			fr: "Éboulement",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
