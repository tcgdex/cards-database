import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/83/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/83/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/83/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Takashi Yamaguchi",

	abilities: [{
		id: 63,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Voltage Increase",
			fr: "Voltage maxi",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Lightning Energy attached to 1 of your Pokémon to Raichu. This power can't be used if Raichu is affected by a Special Condition.",
			fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Lightning attachée à l'un des Pokémon de votre Banc et l'attacher à Raichu. Ce pouvoir ne peut pas être utilisé si Raichu est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mega Thunderbolt",
			fr: "Méga tonnerre",
		},
		text: {
			en: "Discard all Energy attached to Raichu.",
			fr: "Défaussez toutes les cartes Énergie attachées à Raichu.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
