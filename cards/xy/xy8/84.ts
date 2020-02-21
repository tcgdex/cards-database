import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-84",
	localId: 84,

	// Card informations
	name: {
		en: "Gallade",
		fr: "Gallame",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/84/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/84/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/84/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 564,
		type: AbilityType.TALENT,
		name: {
			en: "Premonition",
			fr: "Présage",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 5 cards of your deck and put them back on top of your deck in any order.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck et les replacer sur le dessus de votre deck dans l'ordre de votre choix.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sensitive Blade",
			fr: "Lame Sensible",
		},
		text: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
