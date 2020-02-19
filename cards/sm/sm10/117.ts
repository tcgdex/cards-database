import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-117",
	localId: 117,

	// Card informations
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/117/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/117/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/117/high.png",
		},
	},

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bring Down",
			fr: "Réduire à Rien",
		},
		text: {
			en: "The Pokémon that has the least HP remaining, except for this Pokémon, is Knocked Out. (If multiple Pokémon are tied, choose one.)",
			fr: "Le Pokémon qui a le moins de PV restants, à l’exception de ce Pokémon, est mis K.O. (Si plusieurs Pokémon sont à égalité, choisissez-en un.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Mist Slash",
			fr: "Tranche-Brume",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

