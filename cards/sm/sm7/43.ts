import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-43",
	localId: 43,

	// Card informations
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 368,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/43/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/43/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/43/high.png",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Deflecting Splash",
			fr: "Déviation Éclaboussante",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

