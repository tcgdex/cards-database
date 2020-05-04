import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-11",
	localId: 11,

	// Card informations
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/11/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/11/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/11/high",
		},
	},

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 200,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Serene Grace",
			fr: "Sérénité",
		},
		text: {
			en: "Once during your turn, when you play Togekiss from your hand to evolve 1 of your Pokémon, you may look at the top 10 cards of your deck, choose as many basic Energy cards as you like, and attach them to your Pokémon in any way you like. Put the other cards back on top of your deck. Shuffle your deck afterward.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Togekiss de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder les 10 cartes du dessus de votre deck. Choisissez autant de cartes Énergie de base que vous voulez et attachez-les à vos Pokémon de la façon que vous voulez. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Scroll",
			fr: "Rouleau-air",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, remove 3 damage counters from Togekiss.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Si c'est pile, retirez à Togekiss 3 marqueurs de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
