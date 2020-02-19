import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-59",
	localId: 59,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Duskull",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/59/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/59/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/59/high.png",
		},
	},

	evolveFrom: {
		fr: "Skélénox",
	},

	tags: [
		Tag.BASIC,
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
			en: "Silhouette",
			fr: "Silhouette",
		},
		text: {
			en: "Put 1 damage counter on the Defending Pokémon. If the Defending Pokémon already has any damage counters on it, put 2 damage counters on that Pokémon instead.",
			fr: "Placez 1 marqueur de dégât sur le Pokémon Défenseur. Si le Pokémon Défenseur possède déjà des marqueurs de dégât, placez sur ce Pokémon 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Will-o'-the-wisp",
			fr: "Feu follet",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

