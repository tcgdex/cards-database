import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-38",
	localId: 38,

	// Card informations
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/38/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 932,
		type: AbilityType.TALENT,
		name: {
			en: "Swing Dance",
			fr: "Danse Qui Balance",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Circular Steps",
			fr: "Pas Circulaires",
		},
		text: {
			en: "This attack does 10 more damage for each other Pokémon in play (both yours and your opponent's).",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun des autres Pokémon en jeu (les vôtres et ceux de votre adversaire).",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
