import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-28",
	localId: 28,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/28/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/28/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/28/high.png",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Balloon Bomb",
			fr: "Bombe Ballon",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez 2 cartes du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thick Liquid",
			fr: "Liquide Épais",
		},
		text: {
			en: "Both Active Pokémon are now Confused and Poisoned.",
			fr: "Les deux Pokémon Actifs sont maintenant Confus et Empoisonnés.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

