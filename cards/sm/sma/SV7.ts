import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV7",
	localId: "SV7",

	// Card informations
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV7/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV7/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV7/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "nagimiso",

	abilities: [{
		id: 1180,
		type: AbilityType.TALENT,
		name: {
			en: "Burning Fighter",
			fr: "Combattant Brûlant",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
