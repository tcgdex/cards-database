import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-149",
	localId: 149,

	// Card informations
	name: {
		en: "Mimikyu-GX",
		fr: "Mimiqui-GX",
	},

	hp: 170,

	type: [
		Type.FAIRY,
	],

	dexId: 778,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/149/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/149/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/149/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Perplex",
			fr: "Affolement",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Let's Snuggle & Fall",
			fr: "Patati-Patatrac",
		},
		text: {
			en: "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Dream Fear-GX",
			fr: "Peur de Rêve-GX",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Choisissez l’un des Pokémon de Banc de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],





	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
