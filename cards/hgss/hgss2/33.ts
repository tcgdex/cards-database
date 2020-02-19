import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Metang",
		fr: "Metang",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 375,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/33/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/33/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/33/high.png",
		},
	},

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Crane",
			fr: "Grue d'énergie",
		},
		text: {
			en: "Search your discard pile for up to 2 Psychic Energy cards and attach them to your Pokémon in any way you like.",
			fr: "Cherchez jusqu'à 2 cartes Énergie Psychic dans votre pile de défausse et attachez-les à vos Pokémon comme bon vous semble.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psypunch",
			fr: "Coup de poing psy",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

