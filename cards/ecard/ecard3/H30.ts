import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H30",
	localId: "H30",

	// Card informations
	name: {
		en: "Umbreon",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H30/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 929,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Gaze",
		},
		text: {
			en: "As long as Umbreon is your Active Pokémon, Benched Pokémon (yours and your opponent's) can't use Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Claws",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
