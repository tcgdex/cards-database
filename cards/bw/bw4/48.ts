import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-48",
	localId: 48,

	// Card informations
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 523,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/48/high",
		},
	},

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Disconnect",
			fr: "Déconnexion",
		},
		text: {
			en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Crash",
			fr: "Chute d'Éclairs",
		},
		text: {
			en: "Discard all Lightning Energy attached to this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
