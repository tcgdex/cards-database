import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-88",
	localId: 88,

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
			en: "https://assets.tcgdex.net/en/sm/sm9/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 1360,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Ambition",
			fr: "Noire Ambition",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, its Retreat Cost is Colorless more.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, son Coût de Retraite augmente de Colorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Seeker",
			fr: "Chercheur d’Ombres",
		},
		text: {
			en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 30
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card
