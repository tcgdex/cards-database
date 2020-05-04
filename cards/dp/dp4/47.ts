import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-47",
	localId: 47,

	// Card informations
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/47/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/47/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/47/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 38,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Emerge",
			fr: "Émerge",
		},
		text: {
			en: "Once during your turn (before your attack), if Metapod is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Metapod and put it onto Metapod. (This counts as evolving Metapod.) Shuffle your deck afterward. This power can't be used if Metapod is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Chrysacier est votre Pokémon Actif, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte qui évolue de Chrysacier et placez-la sur Chrysacier. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Chrysacier est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
