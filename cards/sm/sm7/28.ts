import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-28",
	localId: 28,

	// Card informations
	name: {
		en: "Blaziken-GX",
		fr: "Braségali-GX",
	},

	hp: 240,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/28/high",
		},
	},

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Explosive Kick",
			fr: "Coup de Pied Explosif",
		},
		text: {
			en: "Discard 2 Fire Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
		},
		damage: 210
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Blaze Out-GX",
			fr: "Embrasement-GX",
		},
		text: {
			en: "Discard 2 Energy from your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez 2 Énergies des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
