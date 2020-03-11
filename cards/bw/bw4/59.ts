import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-59",
	localId: 59,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 518,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/59/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/59/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/59/high",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Maiko Fujiwara",

	abilities: [{
		id: 370,
		type: AbilityType.TALENT,
		name: {
			en: "Forewarn",
			fr: "Prédiction",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card back on top of your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck, en choisir 1 et l'ajouter à votre main. Replacez l'autre carte sur le dessus de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Fluffy Dream",
			fr: "Rêve Douillet",
		},
		text: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
