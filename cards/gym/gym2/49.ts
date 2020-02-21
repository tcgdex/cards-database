import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Koga's Pidgey",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 16,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Messenger",
		},
		text: {
			en: "Put Koga's Pidgey and all cards attached to it on top of your deck. Then search your deck for any Basic Pokémon or Evolution card not named Koga's Pidgey. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
