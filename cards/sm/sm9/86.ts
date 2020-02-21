import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-86",
	localId: 86,

	// Card informations
	name: {
		en: "Poochyena",
		fr: "Medhyèna",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 261,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/86/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/86/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Howl in the Dark",
			fr: "Hurlement Nocturne",
		},
		text: {
			en: "Search your deck for up to 2 Darkness Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Pokémon Darkness dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
