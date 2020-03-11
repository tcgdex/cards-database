import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-58",
	localId: 58,

	// Card informations
	name: {
		en: "Chingling",
		fr: "Korillon",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 433,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/58/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/58/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Éoko de votre main sur Korillon (vous le faites ainsi évoluer) et retirer à Korillon tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Uproar",
			fr: "Brouhaha",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
