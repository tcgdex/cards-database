import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV63",
	localId: "SV63",

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV63/high",
		},
	},

	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
