import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-144",
	localId: 144,

	// Card informations
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/144/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/144/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 430,
		type: AbilityType.POKEBODY,
		name: {
			en: "Psybarrier",
			fr: "Barrage psy",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Mewtwo by your opponent's Pokémon that isn't an Evolved Pokémon.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Mewtwo par un Pokémon de votre adversaire n'étant pas un Pokémon Évolué.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Giga Burn",
			fr: "Giga brûlure",
		},
		text: {
			en: "Discard all Energy attached to Mewtwo.",
			fr: "Défaussez toutes les Énergies attachées à Mewtwo.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
