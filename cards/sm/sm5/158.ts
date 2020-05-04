import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-158",
	localId: 158,

	// Card informations
	name: {
		en: "Pheromosa-GX",
		fr: "Cancrelove-GX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 795,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/158/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/158/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/158/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/158/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Fast Raid",
			fr: "Raid Éclair",
		},
		text: {
			en: "If you go first, you can use this attack on your first turn.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Cruel Spike",
			fr: "Piquant Cruel",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Beauty-GX",
			fr: "Beauté-GX",
		},
		text: {
			en: "This attack does 50 damage for each Prize card your opponent has taken. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts pour chaque carte Récompense que votre adversaire a récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
