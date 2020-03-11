import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-67",
	localId: 67,

	// Card informations
	name: {
		en: "Smoochum",
		fr: "Lippouti",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 238,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/67/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/67/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/67/high",
		},
	},

	evolveFrom: {},

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
			en: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Lippoutou de votre main sur Lippouti (vous le faites ainsi évoluer) et retirer à Lippouti tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Psykiss",
			fr: "Psy'bisou",
		},
		text: {
			en: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokémon and have your opponent shuffle that card into his or her deck.",
			fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie spéciale attachée à 1 des Pokémon de votre adversaire et demandez à votre adversaire de la mélanger à son deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
