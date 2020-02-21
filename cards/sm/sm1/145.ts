import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-145",
	localId: 145,

	// Card informations
	name: {
		en: "Gumshoos-GX",
		fr: "Argouste-GX",
	},

	hp: 210,

	type: [
		Type.COLORLESS,
	],

	dexId: 735,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/145/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/145/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/145/high",
		},
	},

	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 750,
		type: AbilityType.TALENT,
		name: {
			en: "Search the Premises",
			fr: "Perquisition",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent reveal their hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de dévoiler sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
		},
		damage: 100
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gumshoe Chance-GX",
			fr: "Chance d’Argousin-GX",
		},
		text: {
			en: "This attack does 50 more damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "��2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
