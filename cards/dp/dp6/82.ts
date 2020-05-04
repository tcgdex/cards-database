import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-82",
	localId: 82,

	// Card informations
	name: {
		en: "Unown ?",
		fr: "Zarbi ?",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/82/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/82/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuaki Aihara",

	abilities: [{
		id: 552,
		type: AbilityType.POKEPOWER,
		name: {
			en: "?",
			fr: "?",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown ? is on your Bench, you may choose a Pokémon in your hand and put it face down. Your opponent guesses a type of that Pokémon. Reveal that card. If your opponent guessed wrong, draw a card. Then, put that card back into your hand.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi ? se trouve sur votre Banc, vous pouvez choisir un Pokémon dans votre main et le placer face cachée. Votre adversaire doit deviner le type de ce Pokémon. Retournez la carte. Si votre adversaire s'est trompé, piochez une carte. Ensuite, replacez cette carte dans votre main.",
		}
	}],

	attacks: [{
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Discard up to 2 cards from your hand. For each card you discarded, draw a card.",
			fr: "Défaussez jusqu'à 2 cartes de votre main. Pour chaque carte défaussée, piochez une carte.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
