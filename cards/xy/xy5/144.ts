import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-144",
	localId: 144,

	// Card informations
	name: {
		en: "Wonder Energy",
		fr: "Énergie Merveille",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/144/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/144/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Fairy. Cette carte ne fournit de l'Énergie Fairy que pendant qu'elle est attachée à un Pokémon Fairy.\n\nÉvitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés au Pokémon Fairy auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés.)\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Fairy, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
