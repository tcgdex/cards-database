import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-36",
	localId: 36,

	// Card informations
	name: {
		en: "Scyther",
		fr: "Insecateur",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 123,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/36/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/36/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Wataru Kawahara/Direc. Shinji Higuchi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Afterimage Strike",
			fr: "Frap'Invisible",
		},
		text: {
			en: "During your opponent's next turn, if Scyther would be damaged by an attack, flip a coin. If heads, prevent that attack's damage done to Scyther.",
			fr: "Pendant le prochain tour de votre adversaire, si Insécateur doit subir les dégâts d'une attaque, lancez une pièce. Si c'est face, Insécateur ne subit pas les",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
