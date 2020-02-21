import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-152",
	localId: 152,

	// Card informations
	name: {
		en: "Florges",
		fr: "Florges",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 671,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/152/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/152/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/152/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/152/high",
		},
	},

	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 831,
		type: AbilityType.TALENT,
		name: {
			en: "Flower Picking",
			fr: "Cueillette de Fleurs",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez choisir 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes et les mélange avec son deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Petal Dance",
			fr: "Danse-Fleur",
		},
		text: {
			en: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. Ce Pokémon est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
