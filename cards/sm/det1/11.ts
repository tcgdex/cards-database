import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "det1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: 16,
		type: AbilityType.TALENT,
		name: {
			en: "Pantomime",
			fr: "Pantomime",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch 1 of your face-down Prize cards with the top card of your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez échanger une de vos cartes Récompense (actuellement face cachée) avec la carte du dessus de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Juggling",
			fr: "Jonglerie",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
