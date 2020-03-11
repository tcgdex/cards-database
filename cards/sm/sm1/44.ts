import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-44",
	localId: 44,

	// Card informations
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 746,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 701,
		type: AbilityType.TALENT,
		name: {
			en: "Cowardice",
			fr: "Échappée",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and return it to your hand. You can't use this Ability during your first turn or on the turn this Pokémon was put into play.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toutes les cartes attachées à ce Pokémon et le remettre dans votre main. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
