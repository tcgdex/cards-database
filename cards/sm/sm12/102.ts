import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-102",
	localId: 102,

	// Card informations
	name: {
		en: "Lunala",
		fr: "Lunala",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/102/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/102/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/102/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 1325,
		type: AbilityType.TALENT,
		name: {
			en: "Blessing of the Moone",
			fr: "Grâce du Halo Lunaire",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Solgaleo in play, you may search your deck for up to 2 Energy cards and attach them to your Solgaleo or Lunala in any way you like. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez Solgaleo en jeu, vous pouvez chercher jusqu’à 2 cartes Énergie dans votre deck, puis les attacher à vos Solgaleo ou Lunala, de la manière que vous voulez. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lunar Blast",
			fr: "Explosion Lunaire",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
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
