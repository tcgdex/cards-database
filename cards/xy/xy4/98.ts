import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Jamming Net Team Flare Hyper Gear",
		fr: "Filet Entravant Hypermatos Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/98/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/98/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Les attaques du Pokémon auquel cette carte est attachée infligent 20 dégâts de moins à tous les Pokémon Défenseurs (avant application de la Faiblesse et de la Résistance). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)\n\nLorsque cette carte est retirée d'un Pokémon pour quelque raison que ce soit, placez cette carte dans la pile de défausse de son propriétaire.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
