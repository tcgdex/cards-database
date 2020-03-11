import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-143",
	localId: 143,

	// Card informations
	name: {
		en: "Charizard G",
		fr: "Dracaufeu ",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/143/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/143/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/143/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/143/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
		Tag.SP,
	],

	illustrator: "Wataru Kawahara",

	abilities: [{
		id: 863,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Call for Power",
			fr: "Appel à la puissance",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move an Energy attached to 1 of your Pokémon to Charizard G. This power can't be used if Charizard G is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie attachée à 1 de vos Pokémon sur Dracaufeu . Ce pouvoir ne peut pas être utilisé si Dracaufeu  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Malevolent Fire",
			fr: "Feu malveillant",
		},
		text: {
			en: "Flip a coin. If tails, discard all Energy attached to Charizard G.",
			fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies attachées à Dracaufeu .",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
