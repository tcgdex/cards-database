import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-13",
	localId: 13,

	// Card informations
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/13/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/13/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/13/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 87,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wash Out",
			fr: "Surlavage",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Blastoise is affected by a Special Condition.",
			fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Water attachée à l'un des Pokémon de votre Banc et l'attacher à votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Tortank est affecté par un État Spécial.",
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
			en: "Hydro Launcher",
			fr: "Hydrolanceur",
		},
		text: {
			en: "Return 2 Water Energy attached to Blastoise to your hand. Choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Récupérez dans votre main 2 cartes Énergie Water attachées à Tortank. Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 100 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
