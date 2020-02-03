import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Gyarados G",
		fr: "Leviator ",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/30/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/30/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wriggle",
			fr: "Se tortiller",
		},
		text: {
			en: "Flip a coin for each of your opponent's Pokémon. If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce pour chaque Pokémon de votre adversaire. Si vous obtenez une face, cette attaque inflige 30 dégâts à ce Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dwindling Wave",
			fr: "Vague diminutrice",
		},
		text: {
			en: "Does 100 damage minus 10 damage for each damage counter on Gyarados .",
			fr: "Inflige 100 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Leviator .",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

