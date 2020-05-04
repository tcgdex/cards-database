import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Head Ringer Team Flare Hyper Gear",
		fr: "Casque Assourdissant Hypermatos Team Flare",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/97/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/97/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {
			en: "Pokémon Tool Flare Rule",
			fr: "Règle pour les Outils Pokémon Flare",
		},
		text: {
			en: "Attach this Pokémon Tool to 1 of your opponent's Pokémon-EX that doesn't already have a Pokémon Tool attached to it.",
			fr: "Attachez cet Outil Pokémon à un Pokémon-EX de votre adversaire auquel un Outil Pokémon n'est pas déjà attaché.",
		},
	},{
		name: {},
		text: {
			fr: "Les attaques du Pokémon auquel cette carte est attachée coûtent Colorless de plus.\n\nLorsque cette carte est retirée d'un Pokémon pour quelque raison que ce soit, placez cette carte dans la pile de défausse de son propriétaire.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
