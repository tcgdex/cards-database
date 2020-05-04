import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-57",
	localId: 57,

	// Card informations
	name: {
		en: "Dedenne-GX",
		fr: "Dedenne-GX",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/57/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/57/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Igarashi",

	abilities: [{
		id: 423,
		type: AbilityType.TALENT,
		name: {
			en: "Dedechange",
			fr: "Dedechange",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard your hand and draw 6 cards. You can't use more than 1 Dedechange Ability each turn.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser votre main et piocher 6 cartes. Vous ne pouvez pas utiliser plus d’un talent Dedechange par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tingly Return-GX",
			fr: "Retour Picotant-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed. Put this Pokémon and all cards attached to it into your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
