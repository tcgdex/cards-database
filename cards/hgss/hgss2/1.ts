import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/1/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/1/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},

	abilities: [{
		id: 1008,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Stardust Song",
			fr: "Chanson céleste",
		},
		text: {
			en: "Once during your turn, when you put Jirachi from your hand onto your Bench, you may flip 3 coins. For each heads, search your discard pile for a Psychic Energy card and attach it to Jirachi.",
			fr: "Une seule fois pendant votre tour, lorsque vous placez Jirachi de votre main sur votre Banc, vous pouvez lancer 3 pièces. Pour chaque côté face, récupérez une carte Énergie Psychic dans votre pile de défausse et attachez-la à Jirachi.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Time Hollow",
			fr: "Creux temporel",
		},
		text: {
			en: "Choose a number of your opponent's Stage 1 or Stage 2 Evolved Pokémon up to the amount of Energy attached to Jirachi. Remove the highest Stage Evolution card from each of those Pokémon and put those cards back into your opponent's hand.",
			fr: "Choisissez au maximum autant de cartes Pokémon Évolution de votre adversaire (niveau 1 ou 2) qu'il y a de cartes Énergie attachées à Jirachi. Retirez les cartes Évolution de niveau le plus élevé de ces Pokémon et remettez-les dans la main de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
