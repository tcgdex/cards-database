import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-16",
	localId: 16,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/16/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/16/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 379,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Curse Breath",
			fr: "Haleine maléfique",
		},
		text: {
			en: "Once during your turn, when you put Spiritomb from your hand onto your Bench, you may put 1 damage counter on all Pokémon that already have any damage counters on them (both yours and your opponent's). You can't use more than 1 Curse Breath Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Spiritomb de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur tous les Pokémon possédant déjà des marqueurs de dégât (les vôtres et ceux de votre adversaire). Vous ne pouvez pas utiliser plus d'1 Poké-Power Haleine maléfique par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Transfer Pain",
			fr: "Transfert de douleur",
		},
		text: {
			en: "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Déplacez 1 marqueur de dégât d'1 de vos Pokémon sur 1 des Pokémon de votre adversaire.",
		},
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
