import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-88",
	localId: 88,

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
			en: "https://assets.tcgdex.net/en/xy/xy10/88/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/88/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/88/high",
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
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Covet",
			fr: "Implore",
		},
		text: {
			en: "Your opponent reveals his or her hand. Choose a card you find there and put it on the bottom of your opponent's deck.",
			fr: "Votre adversaire montre sa main. Choisissez une carte que vous y trouvez et mettez-la en dessous du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Last Resort",
			fr: "Dernier Recours",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 60
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
