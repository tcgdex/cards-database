import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-146",
	localId: 146,

	// Card informations
	name: {
		en: "Azurill",
		fr: "Azurill",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 298,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},

	abilities: [{
		id: 177,
		type: AbilityType.TALENT,
		name: {
			en: "Growing Up",
			fr: "Maturation",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a basic Energy card from your discard pile to your Active Pokémon. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, attachez une carte Énergie de base de votre pile de défausse à votre Pokémon Actif. Si vous utilisez ce talent, votre tour se termine.",
		}
	}],









	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
