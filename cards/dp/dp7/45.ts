import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-45",
	localId: 45,

	// Card informations
	name: {
		en: "Pichu",
		fr: "Pichu",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 172,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/45/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/45/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/45/high",
		},
	},

	evolveFrom: {
		fr: "Pichu",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Pikachu de votre main sur Pichu (vous le faites ainsi évoluer) et retirer à Pichu tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Electric Circuit",
			fr: "Circuit électrique",
		},
		text: {
			en: "Search your discard pile for up to 4 Lightning Energy cards, show them to your opponent, and put them into your hand.",
			fr: "Cherchez dans votre pile de défausse jusqu'à 4 cartes Énergie (L), montrez-les à votre adversaire et placez-les dans votre main.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
