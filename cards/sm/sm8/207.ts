import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-207",
	localId: 207,

	// Card informations
	name: {
		en: "Lugia-GX",
		fr: "Lugia-GX",
	},

	hp: 190,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/207/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/207/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/207/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/207/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Igarashi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pelagic Blade",
			fr: "Lame Pélagique",
		},
		text: {
			en: "This Pokémon can't use Pelagic Blade during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Lame Pélagique pendant votre prochain tour.",
		},
		damage: 170
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lost Purge-GX",
			fr: "Purge Perdue-GX",
		},
		text: {
			en: "Put your opponent's Active Pokémon and all cards attached to it in the Lost Zone. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la Zone Perdue. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
