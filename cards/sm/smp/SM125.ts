import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM125",
	localId: "SM125",

	// Card informations
	name: {
		en: "Naganadel-GX",
		fr: "Mandrillon-GX",
	},

	hp: 210,

	type: [
		Type.PSYCHIC,
	],

	dexId: 804,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM125/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM125/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM125/high",
		},
	},

	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beast Raid",
			fr: "Raid Chimérique",
		},
		text: {
			en: "This attack does 20 damage for each of your Ultra Beasts in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacune de vos Ultra-Chimères en jeu.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Needle",
			fr: "Gerbe d’Aiguilles",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 110
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stinger-GX",
			fr: "Aiguillon-GX",
		},
		text: {
			en: "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Les deux joueurs mélangent leurs cartes Récompense avec leurs decks. Ensuite, chaque joueur place les 3 cartes du dessus de son deck, face cachée, comme cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
