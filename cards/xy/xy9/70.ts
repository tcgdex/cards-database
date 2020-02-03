import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-70",
	localId: 70,

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/70/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/70/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/70/high.png",
		},
	},

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
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
			Type.FIGHTING
		],
		name: {
			en: "Turbo Assault",
			fr: "Assaut Turbo",
		},
		text: {
			en: "Attach an Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à l'un de vos Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Bite Off",
			fr: "Arrachage",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

