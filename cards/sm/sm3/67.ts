import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/67/high",
		},
	},

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 153,
		type: AbilityType.TALENT,
		name: {
			en: "Toppling Wind",
			fr: "Mistral",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 3 cards of your opponent's deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Wrecker",
			fr: "Roc-Boulet",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance. This Pokémon can't attack during your next turn.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
