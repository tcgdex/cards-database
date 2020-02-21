import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-22",
	localId: 22,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/22/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/22/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/22/high",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mach Punch",
			fr: "Mach Punch",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Mega Bravo",
			fr: "Mega bravo",
		},
		text: {
			en: "Discard all Fire Energy attached to Infernape. This attack does 40 damage times the amount of Fire Energy you discarded.",
			fr: "Défaussez toutes les Énergies Fire attachées à Simiabraz. Cette attaque inflige 40 dégâts multipliés par le nombre d'Énergies Fire défaussées.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
