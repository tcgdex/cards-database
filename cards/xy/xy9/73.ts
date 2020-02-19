import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-73",
	localId: 73,

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/73/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/73/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/73/high.png",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Roll Up",
			fr: "Enrouleur",
		},
		text: {
			en: "Flip 3 coins. If any of them are heads, your opponent reveals his or her hand. Then, for each heads, discard a card from your opponent's hand.",
			fr: "Lancez 3 pièces. Si vous obtenez au moins 1 côté face, votre adversaire montre sa main. Ensuite, pour chaque côté face, défaussez une carte de la main de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Otherworldly Return",
			fr: "Retour Surnaturel",
		},
		text: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

