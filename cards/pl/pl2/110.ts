import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-110",
	localId: 110,

	// Card informations
	name: {
		en: "Mismagius GL",
		fr: "Magirêve  Niv. X",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/110/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/110/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 493,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magical Return",
			fr: "Retour magique",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may return a Pokémon Tool card or Technical Machine card attached to your Pokémon to your hand. This power can't be used if Mismagius is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez reprendre dans votre main une carte Outil Pokémon ou une carte Machine Technique attachée à votre Pokémon. Ce pouvoir ne peut pas être utilisé si Magirêve  est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Magic",
			fr: "Obscurité magique",
		},
		text: {
			en: "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 8 damage counters in this way.",
			fr: "Comptabilisez le nombre de cartes dans votre main. Placez autant de marqueurs de dégât sur le Pokémon Défenseur. Vous ne pouvez pas placer plus de 8 marqueurs de dégât de cette façon.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
