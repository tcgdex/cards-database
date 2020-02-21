import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-8",
	localId: 8,

	// Card informations
	name: {
		en: "Lucario GL",
		fr: "Lucario  Niv. 32",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/8/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/8/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 700,
		type: AbilityType.POKEBODY,
		name: {
			en: "Boundary Aura",
			fr: "Barrage aura",
		},
		text: {
			en: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×2 instead.",
			fr: "Multipliez la Faiblesse par 2 pour chaque Pokémon (les vôtres et ceux de votre adversaire).",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combo Throw",
			fr: "Combo de lancers",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
