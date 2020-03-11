import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-145",
	localId: 145,

	// Card informations
	name: {
		en: "Garchomp C",
		fr: "Carchacrok ",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/145/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/145/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/145/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 204,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Healing Breath",
			fr: "Haleine guérisseuse",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Garchomp C LV.X from your hand onto your Active Garchomp C, you may remove all damage counters from each of your Pokémon SP.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Carchacrok  NIV.X de votre main sur votre Carchacrok  Actif, vous pouvez retirer à chacun de vos Pokémon SP tous leurs marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Rush",
			fr: "Dracocharge",
		},
		text: {
			en: "Discard 2 Energy attached to Garchomp C. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp C can't use Dragon Rush during your next turn.",
			fr: "Défaussez 2 Énergies attachées à Carchacrok . Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Carchacrok  ne peut pas utiliser Dracocharge lors de votre prochain tour.",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],





	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
