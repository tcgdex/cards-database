import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-7",
	localId: 7,

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/7/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 172,
		type: AbilityType.TALENT,
		name: {
			en: "Leaf Draw",
			fr: "Pioche Feuille",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Grass Energy card from your hand. If you do, draw 3 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Grass de votre main. Dans ce cas, piochez 3 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deranged Dance",
			fr: "Danse Insensée",
		},
		text: {
			en: "This attack does 20 damage times the number of Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
