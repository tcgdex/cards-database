import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/53/high",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "nagimiso",

	abilities: [{
		id: 546,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Invitation",
			fr: "Invitation Obscure",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent reveal their hand. Put a Basic Pokémon you find there onto your opponent's Bench, and put 3 damage counters on that Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de dévoiler sa main. Placez l’un des Pokémon de base que vous y trouvez sur le Banc de votre adversaire, puis placez 3 marqueurs de dégâts sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
		},
		text: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
