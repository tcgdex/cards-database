import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-16",
	localId: 16,

	// Card informations
	name: {
		en: "Bronzong 4",
		fr: "Archéodong  Niv. 54",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/16/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/16/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/16/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Hand Refresh",
			fr: "Regain manuel",
		},
		text: {
			en: "Each player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)",
			fr: "Chaque joueur mélange sa main avec son deck et pioche jusqu'à 4 cartes. (Vous piochez vos cartes en premier).",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Payback",
			fr: "Représailles",
		},
		text: {
			en: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 50 more damage and the Defending Pokémon is now Confused.",
			fr: "Si votre adversaire ne possède plus qu'1 carte Récompense, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

