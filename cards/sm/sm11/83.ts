import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-83",
	localId: 83,

	// Card informations
	name: {
		en: "Uxie",
		fr: "Créhelf",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 480,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/83/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/83/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},

	abilities: [{
		id: 1394,
		type: AbilityType.TALENT,
		name: {
			en: "Secret Territory",
			fr: "Territoire Secret",
		},
		text: {
			en: "If you have Mesprit and Azelf in play, apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
			fr: "Si vous avez Créfollet et Créfadet en jeu, la Faiblesse de chaque Pokémon (les vôtres et ceux de votre adversaire) est multipliée par 4.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
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
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

