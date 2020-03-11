import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-151",
	localId: 151,

	// Card informations
	name: {
		en: "Floette",
		fr: "Floette",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 670,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/151/high",
		},
	},

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "miki kudo",

	abilities: [{
		id: 831,
		type: AbilityType.TALENT,
		name: {
			en: "Flower Picking",
			fr: "Cueillette de Fleurs",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez choisir une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte et la mélange avec son deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
