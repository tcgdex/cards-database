import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-29",
	localId: 29,

	// Card informations
	name: {
		en: "Gastrodon",
		fr: "Tritosor",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 423,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/29/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/29/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/29/high",
		},
	},

	evolveFrom: {
		en: "Shellos",
		fr: "Sancoki",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sticky Shot",
			fr: "Coup Gluant",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus, et son Coût de Retraite est augmenté de Colorless.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
