import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Slugma",
		fr: "Limagma",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 218,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/67/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/67/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 58,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Active Volcano",
			fr: "Volcan actif",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard the top card of your deck. If that card is a Fire Energy card, attach it to Slugma. This power can't be used if Slugma is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser la carte du dessus de votre deck. S'il s'agit d'une carte Énergie Fire, attachez-la à Limagma. Ce pouvoir ne peut pas être utilisé si Limagma est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
