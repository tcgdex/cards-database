import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-36",
	localId: 36,

	// Card informations
	name: {
		en: "Walrein",
		fr: "Kaimorse Niv. 59",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/36/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/36/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/36/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 393,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Gather Ice",
			fr: "Groupement de glace",
		},
		text: {
			en: "Once during your turn (before your attack), when you play Walrein from your hand to evolve 1 of your Pokémon, you may attach as many Water Energy cards from your hand to Walrein as you like.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Kaimorse de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez attacher autant de cartes Énergie Water de votre main sur Kaimorse que vous le voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cold Crush",
			fr: "Écraser net",
		},
		text: {
			en: "Discard an Energy card attached to Walrein and then discard an Energy card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Énergie attachée à Kaimorse puis défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
