import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm7/10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/10/high.png",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

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

