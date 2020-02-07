import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Orbeetle",
		fr: "Astronelle",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/19/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/19/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/19/high.png",
		},
	},

	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "Hitoshi Ariga"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Bug’s Radar",
			fr: "Radar d’Insecte",
		},
		text: {
			en: "Once during your turn, you may look at the top 3 cards of your opponent’s deck and put them back in any order.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l’ordre désiré.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Brainwave",
			fr: "Onde Cérébrale",
		},
		text: {
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

