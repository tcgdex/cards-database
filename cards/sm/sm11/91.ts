import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-91",
	localId: 91,

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
			en: "https://assets.tcgdex.net/en/sm/sm11/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/91/high",
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
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mysterious Noise",
			fr: "Bruit Mystérieux",
		},
		text: {
			en: "Shuffle this Pokémon and all cards attached to it into your deck. Your opponent can't play any Item cards from their hand during their next turn.",
			fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck. Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
