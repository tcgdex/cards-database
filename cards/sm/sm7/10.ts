import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-10",
	localId: 10,

	// Card informations
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/10/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/10/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/10/high",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1167,
		type: AbilityType.TALENT,
		name: {
			en: "Power of Nature",
			fr: "Puissance de la Nature",
		},
		text: {
			en: "Prevent all damage done to your Pokémon that have any Grass Energy attached to them by attacks from your opponent's Ultra Beasts.",
			fr: "Évitez tous les dégâts infligés par les attaques des Ultra-Chimères de votre adversaire à vos Pokémon auxquels de l’Énergie Grass est attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Powerful Storm",
			fr: "Tempête Puissante",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à tous vos Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
