import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-90",
	localId: 90,

	// Card informations
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 660,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/90/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/90/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/90/high",
		},
	},

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Ear Dig",
			fr: "Excav'Oreille",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
