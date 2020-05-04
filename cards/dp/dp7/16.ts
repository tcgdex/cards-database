import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-16",
	localId: 16,

	// Card informations
	name: {
		en: "Drifblim",
		fr: "Drifblim",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/16/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/16/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/16/high",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		name: {
			en: "Delivery",
			fr: "Livraison",
		},
		text: {
			en: "Put any 1 card from your discard pile into your hand.",
			fr: "Placez dans votre main n'importe quelle carte de votre pile de défausse.",
		},
	},{
		name: {
			en: "Lifting",
			fr: "Élévation",
		},
		text: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. For each Basic Pokémon you put onto your Bench, you may search your deck for a basic Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Pour chaque Pokémon de base que vous placez sur votre Banc, vous pouvez choisir dans votre deck une carte Énergie de base et l'attacher à ce Pokémon. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Ominous Wind",
			fr: "Vent Mauvais",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
