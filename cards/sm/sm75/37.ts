import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-37",
	localId: 37,

	// Card informations
	name: {
		en: "Dragonite-GX",
		fr: "Dracolosse-GX",
	},

	hp: 250,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/37/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/37/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/37/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/37/high.png",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 70
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 200
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragonporter-GX",
			fr: "Dracoporteur-GX",
		},
		text: {
			en: "Put 3 Dragon Pokémon from your discard pile onto your Bench. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez 3 Pokémon Dragon de votre pile de défausse sur votre Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card

