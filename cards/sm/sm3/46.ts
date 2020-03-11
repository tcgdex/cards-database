import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-46",
	localId: 46,

	// Card informations
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 604,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/46/high",
		},
	},

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dark Clamp",
			fr: "Pince des Ténèbres",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Vacuum Bolt",
			fr: "Éclair Aspiré",
		},
		text: {
			en: "You may do 80 more damage. If you do, this attack does 80 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous pouvez infliger 80 dégâts supplémentaires. Dans ce cas, cette attaque inflige 80 dégâts à l’un de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
