import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Happiny",
		fr: "Ptiravi",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 440,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/76/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/76/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution Bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Leveinard de votre main sur Ptiravi (vous le faites ainsi évoluer) et retirer à Ptiravi tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Hospitality",
			fr: "Hospitalité",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. Remove 2 damage counters from the new Defending Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Retirez 2 marqueurs de dégât au nouveau Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
