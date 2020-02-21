import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-31",
	localId: 31,

	// Card informations
	name: {
		en: "Banette",
		fr: "Branette",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/31/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 400,
		type: AbilityType.TALENT,
		name: {
			en: "Tool Concealment",
			fr: "Outil Masqué",
		},
		text: {
			en: "Each Pokémon Tool card in play has no effect.",
			fr: "Chaque carte Outil Pokémon en jeu n'a aucun effet.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
