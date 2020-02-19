import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-98",
	localId: 98,

	// Card informations
	name: {
		en: "Chingling",
		fr: "Korillon",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 433,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/98/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/98/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

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
			en: "Chime",
			fr: "Carillon",
		},
		text: {
			en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
			fr: "Choisissez dans la pile de défausse de votre adversaire une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse de votre adversaire.)",
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
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

