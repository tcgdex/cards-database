import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-161",
	localId: 161,

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
			en: "https://assets.tcgdex.net/en/sm/sm10/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},

	abilities: [{
		id: 516,
		type: AbilityType.TALENT,
		name: {
			en: "Playhouse Heal",
			fr: "Soins Maisonjouet",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, heal 60 damage from 1 of your Pokémon. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, soignez 60 dégâts à l’un de vos Pokémon. Si vous utilisez ce talent, votre tour se termine.",
		}
	}],









	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
