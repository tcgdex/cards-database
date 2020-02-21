import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-81",
	localId: 81,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 4 cards of either player's deck and put them back in any order.",
			fr: "Regardez les 4 cartes du dessus du deck de l’un des joueurs et replacez-les dans l’ordre de votre choix.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Doom News",
			fr: "Nouvelles Sinistres",
		},
		text: {
			en: "Put all Energy attached to this Pokémon into your hand. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			fr: "Placez toutes les Énergies attachées à ce Pokémon dans votre main. À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera K.O.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
