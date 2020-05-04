import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-106",
	localId: 106,

	// Card informations
	name: {
		en: "Kartana-GX",
		fr: "Katagami-GX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 798,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/106/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/106/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1200,
		type: AbilityType.TALENT,
		name: {
			en: "Slice Off",
			fr: "Trancher",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gale Blade",
			fr: "Lame Bourrasque",
		},
		text: {
			en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
		damage: 70
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Blade-GX",
			fr: "Lame-GX",
		},
		text: {
			en: "Take a Prize card. (You can't use more than 1 GX attack in a game.)",
			fr: "Récupérez une carte Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
