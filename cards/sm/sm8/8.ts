import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-8",
	localId: 8,

	// Card informations
	name: {
		en: "Meganium",
		fr: "Méganium",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/8/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "nagimiso",

	abilities: [{
		id: 1338,
		type: AbilityType.TALENT,
		name: {
			en: "Quick-Ripening Herb",
			fr: "Herbe Mûrissante",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this Ability. Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it. You can use this Ability during your first turn or on a Pokémon that was put into play this turn.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base pour le faire évoluer. Vous pouvez utiliser ce talent pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
