import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-97",
	localId: 97,

	// Card informations
	name: {
		en: "Jirachi ◇",
		fr: "Jirachi ",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1201,
		type: AbilityType.TALENT,
		name: {
			en: "Wish Upon a Star",
			fr: "Soupir aux Étoiles",
		},
		text: {
			en: "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench and take 1 more Prize card.",
			fr: "Si vous avez obtenu ce Pokémon en récupérant une carte Récompense face cachée lors de votre tour, et si votre banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc et récupérer une carte Récompense supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Perish Dream",
			fr: "Rêve Languissant",
		},
		text: {
			en: "This Pokémon is now Asleep. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			fr: "Ce Pokémon est maintenant Endormi. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
