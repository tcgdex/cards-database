import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-113",
	localId: 113,

	// Card informations
	name: {
		en: "Slakoth",
		fr: "Parecool",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 287,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Claw",
			fr: "Mâchoire",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slack Off",
			fr: "Paresse",
		},
		text: {
			en: "Heal all damage from this Pokémon. It can't attack during your next turn.",
			fr: "Soignez tous les dégâts de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
