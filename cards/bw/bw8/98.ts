import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-98",
	localId: 98,

	// Card informations
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/98/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/98/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/98/high",
		},
	},

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 93,
		type: AbilityType.TALENT,
		name: {
			en: "Moon Guidance",
			fr: "Guide Lunaire",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck une carte Évolution de l'un de vos Pokémon et placez-la sur le Pokémon. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Impact",
			fr: "Impact Lunaire",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
