import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-93",
	localId: 93,

	// Card informations
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 628,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/93/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/93/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/93/high",
		},
	},

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Drop",
			fr: "Chute Libre",
		},
		text: {
			en: "This attack does 120 damage minus 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 120 dégâts moins 20 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
