import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-36",
	localId: 36,

	// Card informations
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/36/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/36/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/36/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Link",
			fr: "Chaîne d’énergie",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Blissey.",
			fr: "Cherchez dans votre pile de défausse une carte Énergie et attachez-la à Leuphorie.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
			fr: "Damoclès",
		},
		text: {
			en: "Blissey does 40 damage to itself.",
			fr: "Leuphorie s’inflige 40 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
