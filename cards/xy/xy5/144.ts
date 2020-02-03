import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy5/144/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/144/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/144/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/144/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Fairy. Cette carte ne fournit de l'Énergie Fairy que pendant qu'elle est attachée à un Pokémon Fairy.\n\nÉvitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés au Pokémon Fairy auquel cette carte est attachée. (Les effets déjà en action ne sont pas retirés.)\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Fairy, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

