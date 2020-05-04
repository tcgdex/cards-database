import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-79",
	localId: 79,

	// Card informations
	name: {
		en: "Watchog",
		fr: "Miradar",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 505,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/79/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/79/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/79/high",
		},
	},

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Watcheck",
			fr: "Contrôle Radar",
		},
		text: {
			en: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Tail Smash",
			fr: "Rapid'Claqueue",
		},
		text: {
			en: "Before doing damage, you may flip a coin. If heads, this attack does 60 more damage. If tails, this attack does nothing.",
			fr: "Avant d'infliger des dégâts, vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
