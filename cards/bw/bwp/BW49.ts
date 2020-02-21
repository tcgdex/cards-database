import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW49",
	localId: "BW49",

	// Card informations
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 549,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW49/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW49/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW49/high",
		},
	},

	evolveFrom: {
		en: "Petilil",
		fr: "Petilil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lead",
			fr: "Mentor",
		},
		text: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dream Dance",
			fr: "Danse-Rêve",
		},
		text: {
			en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
			fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
