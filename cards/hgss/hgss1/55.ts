import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/55/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/55/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideaki Hakozaki",

	abilities: [{
		id: 717,
		type: AbilityType.POKEPOWER,
		name: {
			en: "FLASH",
			fr: "FLASH",
		},
		text: {
			en: "Once during your turn, when you put Unown from your hand onto your Bench, you may look at the top 5 cards of your deck and put them back on top of your deck in any order.",
			fr: "Une seule fois pendant votre tour, lorsque vous prenez Zarbi dans votre main et le placez sur votre Banc, vous pouvez regarder les 5 cartes du dessus de votre deck et les y replacer dans l’ordre de votre choix.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
