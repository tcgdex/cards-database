import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-105",
	localId: 105,

	// Card informations
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/105/high",
		},
	},

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "MAHOU",

	abilities: [{
		id: 1331,
		type: AbilityType.TALENT,
		name: {
			en: "Initialize",
			fr: "Initialisation",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may devolve each of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez faire dés-évoluer chacun des Pokémon évolués de votre adversaire en plaçant la carte du niveau d’Évolution le plus élevé dans la main de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zap Cannon",
			fr: "Élecanon",
		},
		text: {
			en: "This Pokémon can't use Zap Cannon during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
