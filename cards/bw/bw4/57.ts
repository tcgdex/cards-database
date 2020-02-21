import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-57",
	localId: 57,

	// Card informations
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/57/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/57/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/57/high",
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
		id: 3,
		name: "Mizue"
	},

	abilities: [{
		id: 819,
		type: AbilityType.TALENT,
		name: {
			en: "Psychic Mirage",
			fr: "Mirage Psychique",
		},
		text: {
			en: "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can't apply more than 1 Psychic Mirage Ability at a time.",
			fr: "Chaque Énergie Psychic de base attachée à vos Pokémon Psychic fournit de l'Énergie PsychicPsychic. Vous ne pouvez pas appliquer plus d'une capacité spéciale Mirage Psychique à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
			fr: "Choc Cérébral",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
