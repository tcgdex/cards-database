import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-31",
	localId: 31,

	// Card informations
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/31/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/31/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/31/high",
		},
	},

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 327,
		type: AbilityType.POKEBODY,
		name: {
			en: "Flame Body",
			fr: "Corps ardent",
		},
		text: {
			en: "When you attach a Fire Energy card from your hand to Magmortar, remove 2 damage counters from Magmortar.",
			fr: "Lorsque vous attachez une carte Énergie Fire de votre main à Maganon, retirez à Maganon 2 marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Blast",
			fr: "Explosion de flammes",
		},
		text: {
			en: "Does 20 damage times the number of Fire Energy attached to Magmortar.",
			fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies Fire attachées à Maganon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fireball Bazooka",
			fr: "Boule de feu bazooka",
		},
		text: {
			en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
