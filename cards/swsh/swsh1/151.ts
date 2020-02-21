import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-151",
	localId: 151,

	// Card informations
	name: {
		en: "Corvisquire",
		fr: "Bleuseille",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/151/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/151/low",
		}
	},

	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 12,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pluck",
			fr: "Picore",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d’infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
