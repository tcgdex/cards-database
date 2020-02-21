import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW41",
	localId: "BW41",

	// Card informations
	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge",
			fr: "Chargeur",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Disaster Volt",
			fr: "Éclair Désastre",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
