import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-4",
	localId: 4,

	// Card informations
	name: {
		en: "Vileplume-GX",
		fr: "Rafflesia-GX",
	},

	hp: 240,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/4/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/4/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/4/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 772,
		type: AbilityType.TALENT,
		name: {
			en: "Fragrant Flower Garden",
			fr: "Jardin Fleuri Parfumé",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 30 damage from each of your Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Massive Bloom",
			fr: "Floraison Massive",
		},
		text: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 180
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Allergic Explosion-GX",
			fr: "Explosion Allergène-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned, Paralyzed, and Poisoned. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Empoisonné et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
