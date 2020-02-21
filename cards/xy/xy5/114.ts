import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-114",
	localId: 114,

	// Card informations
	name: {
		en: "Delcatty",
		fr: "Delcatty",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/114/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/114/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/114/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Replace",
			fr: "Repositionnement",
		},
		text: {
			en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
