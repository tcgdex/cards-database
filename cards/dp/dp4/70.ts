import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-70",
	localId: 70,

	// Card informations
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 174,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/70/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/70/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff) and remove all damage counters from Igglybuff.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Rondoudou de votre main sur Toudoudou (vous le faites ainsi évoluer) et retirer à Toudoudou tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Inquire",
			fr: "Se renseigner",
		},
		text: {
			en: "Draw a card. If you didn't play any Supporter card from your hand during this turn, draw 2 more cards.",
			fr: "Piochez une carte. Si vous n'avez pas joué de cartes Supporter de votre main ce tour-ci, piochez 2 cartes supplémentaires.",
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
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

