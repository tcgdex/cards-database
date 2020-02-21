import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW92",
	localId: "BW92",

	// Card informations
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW92/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW92/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW92/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 160,
		name: "Illus.＆Direc.The Pokémon Company Art Team"
	},

	abilities: [{
		id: 789,
		type: AbilityType.TALENT,
		name: {
			en: "Solar Revelation",
			fr: "Révélation Solaire",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Energy attached to it.",
			fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l'Énergie est attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psy Report",
			fr: "Observation Psychique",
		},
		text: {
			en: "Your opponent reveals his or her hand.",
			fr: "Votre adversaire montre sa main.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
