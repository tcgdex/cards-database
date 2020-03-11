import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy4/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/40/high",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



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
