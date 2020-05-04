import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-84",
	localId: 84,

	// Card informations
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/84/high",
		},
	},

	evolveFrom: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 1359,
		type: AbilityType.TALENT,
		name: {
			en: "Adventurous Appetite",
			fr: "Appétit Aventurier",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 6 cards of your opponent's deck and discard any number of Item cards you find there. Your opponent shuffles the other cards back into their deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 6 cartes du dessus du deck de votre adversaire et en défausser autant de cartes Objet trouvées que vous voulez. Votre adversaire mélange les autres cartes avec son deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gunk Shot",
			fr: "Détricanon",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
