import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-31",
	localId: 31,

	// Card informations
	name: {
		en: "Articuno-GX",
		fr: "Artikodin-GX",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1168,
		type: AbilityType.TALENT,
		name: {
			en: "Legendary Ascent",
			fr: "Ascension Légendaire",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, move any number of Water Energy from your other Pokémon to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l’échanger avec votre Pokémon Actif. Dans ce cas, déplacez autant d’Énergies Water que vous voulez de vos autres Pokémon vers ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Wing",
			fr: "Aile Glace",
		},
		damage: 130
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cold Crush-GX",
			fr: "Écraser Net-GX",
		},
		text: {
			en: "Discard all Energy from both Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez toute l’Énergie des deux Pokémon Actifs. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
