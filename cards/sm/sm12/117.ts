import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-117",
	localId: 117,

	// Card informations
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 537,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/117/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/117/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/117/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/117/high",
		},
	},

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 1326,
		type: AbilityType.TALENT,
		name: {
			en: "Bulldoze",
			fr: "Piétisol",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tremulous Fist",
			fr: "Poing Trémulant",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
