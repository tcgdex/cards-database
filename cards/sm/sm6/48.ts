import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-48",
	localId: 48,

	// Card informations
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 680,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/48/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/48/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/48/high.png",
		},
	},

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Curse of the Blade",
			fr: "Lame Sortilège",
		},
		text: {
			en: "Put 3 damage counters on each of your opponent's Pokémon that has a Pokémon Tool card attached to it.",
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel une carte Outil Pokémon est attachée.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

