import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-45",
	localId: 45,

	// Card informations
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 711,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/45/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/45/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/45/high",
		},
	},

	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kanako Eo",

	abilities: [{
		id: 810,
		type: AbilityType.TALENT,
		name: {
			en: "Gourgantic",
		},
		text: {
			en: "If this Pokémon has any Grass Energy attached to it, its maximum HP is 200.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horror Note",
			fr: "Gigantrouye",
		},
		text: {
			en: "This attack does 10 damage times the number of cards in your hand.",
			fr: "Si de l'Énergie Grass est attachée à ce Pokémon, ses PV maximum sont de 200.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Note Angoissante",
		},
		text: {
			fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
		},
		damage: "10x"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
