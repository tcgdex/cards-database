import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY10",
	localId: "XY10",

	// Card informations
	name: {
		en: "Dragalge",
		fr: "Kravarech",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 691,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY10/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY10/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY10/high.png",
		},
	},

	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 637,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Barrier",
			fr: "Barrière de Poison",
		},
		text: {
			en: "Your opponent's Poisoned Pokémon can't retreat.",
			fr: "Les Pokémon Empoisonnés de votre adversaire ne peuvent pas battre en retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Breath",
			fr: "Haleine Empoisonnée",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

