import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV54",
	localId: "SV54",

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV54/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV54/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

