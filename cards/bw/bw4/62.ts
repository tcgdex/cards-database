import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Beheeyem",
		fr: "Neitram",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 606,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/62/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/62/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/62/high.png",
		},
	},

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
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
			Type.PSYCHIC
		],
		name: {
			en: "Brain Control",
			fr: "Contrôle Cérébral",
		},
		text: {
			en: "Your opponent reveals his or her hand. Choose a card from there and put it on the bottom of your opponent's deck.",
			fr: "Votre adversaire montre sa main. Choisissez-y une carte et mettez-la en dessous du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card

