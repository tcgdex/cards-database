import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM216",
	localId: "SM216",

	// Card informations
	name: {
		en: "Porygon-Z-GX",
	},

	hp: 240,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM216/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM216/high.png",
		},
	},

	evolveFrom: {
		en: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],



	abilities: [{
		id: 1402,
		type: AbilityType.TALENT,
		name: {
			en: "Troubleshooting",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Special Energy from this Pokémon. If you do, heal 80 damage from it.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Abnormal Overheating",
		},
		text: {
			en: "This Pokémon is now Burned.",
		},
		damage: 160
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Critical Error GX",
		},
		text: {
			en: "Search your deck for up to 10 cards and discard them. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

