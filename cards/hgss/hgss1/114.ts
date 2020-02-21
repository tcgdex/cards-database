import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-114",
	localId: 114,

	// Card informations
	name: {
		en: "Lugia LEGEND",
		fr: "Lugia LÉGENDAIRE",
	},



	type: [
		Type.WATER,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/114/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/114/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/114/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: {
		id: 167,
		name: "Shinji Higuchi"
	},

	abilities: [{
		id: 1037,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Ocean Grow",
			fr: "Vaste océan",
		},
		text: {
			en: "Once during your turn, when you put Lugia LEGEND into play, you may look at the top 5 cards of your deck and attach all Energy cards you find there to Lugia LEGEND. Discard the other cards.",
			fr: "Une seule fois pendant votre tour, lorsque vous mettez Lugia LÉGENDAIRE en jeu, vous pouvez regarder les cinq cartes du dessus de votre deck et attacher les cartes Énergie figurant parmi ces cartes à Lugia LÉGENDAIRE. Défaussez-vous des autres cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Elemental Blast",
			fr: "Explosion élémentaire",
		},
		text: {
			en: "Discard a Fire Energy, Water Energy, and Lightning Energy attached to Lugia LEGEND.",
			fr: "Défaussez-vous d’une Énergie Fire, d’une Énergie Water et d’une Énergie Lightning attachées à Lugia LÉGENDAIRE.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
