import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-15",
	localId: 15,

	// Card informations
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 666,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/15/high",
		},
	},

	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},

	abilities: [{
		id: 482,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Color",
			fr: "Couleur d'Énergie",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Powder",
			fr: "Poudre Dodo",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
