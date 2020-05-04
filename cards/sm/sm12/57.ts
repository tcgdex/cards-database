import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-57",
	localId: 57,

	// Card informations
	name: {
		en: "Phione",
		fr: "Phione",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 489,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/57/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/57/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "AKIRA EGAWA",

	abilities: [{
		id: 1373,
		type: AbilityType.TALENT,
		name: {
			en: "Whirlpool Suction",
			fr: "Tourbillon Aspirant",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon. If you do, discard all cards attached to this Pokémon and put it on the bottom of your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc. Dans ce cas, défaussez toutes les cartes attachées à ce Pokémon et placez-le en dessous de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
