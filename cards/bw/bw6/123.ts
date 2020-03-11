import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-123",
	localId: 123,

	// Card informations
	name: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/123/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/123/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Celestial Roar",
			fr: "Cri du Ciel",
		},
		text: {
			en: "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Burst",
			fr: "Fureur du Dragon",
		},
		text: {
			en: "Discard all basic Fire Energy or all basic Lightning Energy attached to this Pokémon. This attack does 60 damage times the number of Energy cards you discarded.",
			fr: "Défaussez toutes les Énergies Fire de base ou toutes les Énergies Lightning de base attachées à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
