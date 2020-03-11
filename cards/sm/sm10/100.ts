import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-100",
	localId: 100,

	// Card informations
	name: {
		en: "Tyrogue",
		fr: "Debugant",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 236,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",

	abilities: [{
		id: 460,
		type: AbilityType.TALENT,
		name: {
			en: "Bratty Kick",
			fr: "Frappe Friponne",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, put 3 damage counters on 1 of your opponent's Pokémon. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si vous utilisez ce talent, votre tour se termine.",
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
