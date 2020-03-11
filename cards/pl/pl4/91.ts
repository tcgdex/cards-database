import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Ultimate Zone",
		fr: "Zone ultime",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/91/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/91/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Lors du tour de chaque joueur, celui-ci peut déplacer une carte Énergie attachée à 1 de ses Pokémon de Banc sur son Arceus Actif autant de fois qu'il ou elle le veut.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
