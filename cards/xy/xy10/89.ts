import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-89",
	localId: 89,

	// Card informations
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 573,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/89/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/89/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/89/high",
		},
	},

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sweeping Cure",
			fr: "Guérison Extensive",
		},
		text: {
			en: "Heal 90 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 90 dégâts à l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
