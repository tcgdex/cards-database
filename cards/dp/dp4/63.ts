import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-63",
	localId: 63,

	// Card informations
	name: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 10,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/63/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/63/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 371,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Pupate",
			fr: "Sortir de sa chrysalide",
		},
		text: {
			en: "Once during your turn (before your attack), if Caterpie is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Caterpie and put it onto Caterpie. (This counts as evolving Caterpie.) Shuffle your deck afterward. This power can't be used if Caterpie is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Chenipan est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte qui évolue de Chenipan et placez-la sur Chenipan. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Chenipan est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
