import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-106",
	localId: 106,

	// Card informations
	name: {
		en: "Palkia",
		fr: "Palkia",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/106/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/106/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/106/high",
		},
	},

	evolveFrom: {
		fr: "Niveau Sup",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 818,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Restructure",
			fr: "Restructurer",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent switch 1 of your Active Pokémon with 1 of your Benched Pokémon. Then, you switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. This power can't be used if Palkia is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc. Ensuite, vous échangez 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Ce pouvoir ne peut pas être utilisé si Palkia est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydro Reflect",
			fr: "Hydro-reflet",
		},
		text: {
			en: "You may move all Energy cards attached to Palkia to your Benched Pokémon in any way you like. (Ignore this effect if you don't have any Benched Pokémon.)",
			fr: "Vous pouvez déplacer toutes les cartes Énergie attachées à Palkia sur vos Pokémon de Banc de la façon que vous voulez. (Ignorez cet effet si vous n'avez pas de Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
