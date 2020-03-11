import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-142",
	localId: 142,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/142/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/142/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/142/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 675,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Electric Trans",
			fr: "Transe électrique",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Lightning or Metal Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Magnezone is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Lightning ou Metal attachée à 1 de vos Pokémon sur un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.METAL
		],
		name: {
			en: "Cyber Shock",
			fr: "Choc cyber",
		},
		text: {
			en: "Discard a Lightning Energy and a Metal Energy attached to Magnezone. The Defending Pokémon is now Paralyzed.",
			fr: "Défaussez une Énergie Lightning et une Énergie Metal attachée à Magnézone. Le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
