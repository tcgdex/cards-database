import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Dialga G",
		fr: "Dialga ",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/7/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/7/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/7/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Deafen",
			fr: "Rendre sourd",
		},
		text: {
			en: "Your opponent can't play any Trainer cards or Stadium cards from his or her hand during your opponent's next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Dresseur ou Stade de sa main lors de son prochain tour.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Second Strike",
			fr: "Deuxième coup",
		},
		text: {
			en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 50 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

