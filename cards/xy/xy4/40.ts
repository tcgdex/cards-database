import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-40",
	localId: 40,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 518,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/40/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/40/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/40/high.png",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dream of Memories",
			fr: "Retour en Arrière",
		},
		text: {
			en: "Shuffle 3 cards from your discard pile into your deck.",
			fr: "Mélangez 3 cartes de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Dream Dance",
			fr: "Danse-Rêve",
		},
		text: {
			en: "Both Active Pokémon are now Asleep.",
			fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

