import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-67",
	localId: 67,

	// Card informations
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/67/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/67/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/67/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 598,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Cast-off Shell",
			fr: "Coquille libérante",
		},
		text: {
			en: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon and if your Bench isn't full, you may put Shedinja onto your Bench as a Basic Pokémon from your hand or your discard pile.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Ninjask de votre main pour faire évoluer 1 de vos Pokémon et si votre Banc n'est pas plein, vous pouvez placer Munja sur votre Banc comme Pokémon de base de votre main ou votre pile de défausse.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Chip Off",
			fr: "Grignoter",
		},
		text: {
			en: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
			fr: "Si votre adversaire possède au moins 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne lui reste plus que 5 cartes en main.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
