import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-98",
	localId: 98,

	// Card informations
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/98/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/98/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 504,
		type: AbilityType.POKEBODY,
		name: {
			en: "Chilly Breath",
			fr: "Haleine glacée",
		},
		text: {
			en: "As long as Glaceon is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
			fr: "Tant que Givrali est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas utiliser de Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Avalanche",
			fr: "Avalanche",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
