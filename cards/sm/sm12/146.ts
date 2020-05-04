import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Asako Ito",

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









	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
