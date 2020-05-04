import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Raikou",
		fr: "Raikou",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/16/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/16/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 1060,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Thunder Rumble",
			fr: "Roulement de tonnerre",
		},
		text: {
			en: "Once during your turn (before your attack), when you attach a Lightning Energy card from your hand to Raikou, you may put 1 damage counter on 1 of your opponent's Benched Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Lightning de votre main à Raikou, vous pouvez placer 1 marqueur de dégât sur 1 des Pokémon de Banc de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Climb",
			fr: "Tonnerre grimpant",
		},
		text: {
			en: "Discard 3 cards from the top of your deck. This attack does 50 damage plus 10 more damage for each Lightning Energy card you discarded. Then, attach those Lightning Energy cards to 1 of your Pokémon.",
			fr: "Défaussez 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Lightning défaussée. Ensuite, attachez ces cartes Énergie Lightning à 1 de vos Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
