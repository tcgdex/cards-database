import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-73",
	localId: 73,

	// Card informations
	name: {
		en: "Lunatone",
		fr: "Séléroc",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/73/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/73/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouji Tajima",

	abilities: [{
		id: 564,
		type: AbilityType.TALENT,
		name: {
			en: "Premonition",
			fr: "Présage",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back on top of your deck in any order.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer sur le dessus de votre deck dans l'ordre de votre choix.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
