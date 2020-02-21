import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-81",
	localId: 81,

	// Card informations
	name: {
		en: "Marshadow",
		fr: "Marshadow",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 802,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/81/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/81/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 91,
		name: "chibi"
	},

	abilities: [{
		id: 447,
		type: AbilityType.TALENT,
		name: {
			en: "Resetting Hole",
			fr: "Trou de Réinitialisation",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard any Stadium card in play. If you do, discard this Pokémon and all cards attached to it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser toute carte Stade en jeu. Dans ce cas, défaussez ce Pokémon et toutes les cartes qui lui sont attachées.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Red Knuckles",
			fr: "Poings Rouges",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Ultra Beast, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
