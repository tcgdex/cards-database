import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-103",
	localId: 103,

	// Card informations
	name: {
		en: "Alakazam 4",
		fr: "Alakazam  Niv. X",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/103/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/103/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 470,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Damage Switch",
			fr: "Échange de dégâts",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon SP to another of your Pokémon SP. This power can't be used if Alakazam is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégât d'1 de vos Pokémon SP sur un autre de vos Pokémon SP. Ce pouvoir ne peut pas être utilisé si Alakazam  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
			fr: "Choc cérébral",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
