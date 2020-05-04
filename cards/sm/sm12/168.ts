import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-168",
	localId: 168,

	// Card informations
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 174,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/168/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/168/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/168/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/168/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1384,
		type: AbilityType.TALENT,
		name: {
			en: "Sleepy Voice",
			fr: "Voix Endormie",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si vous utilisez ce talent, votre tour se termine.",
		}
	}],









	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
