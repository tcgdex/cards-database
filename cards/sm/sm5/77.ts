import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-77",
	localId: 77,

	// Card informations
	name: {
		en: "Darkrai ◇",
		fr: "Darkrai ",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 1046,
		type: AbilityType.TALENT,
		name: {
			en: "Nightmare Star",
			fr: "Étoile Cauchemar",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Darkness Energy cards from your hand to it.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Darkness de votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Abyssal Sleep",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
		},
		damage: 120
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			fr: "Sommeil Abyssal",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S’il obtient au moins un côté pile, le Pokémon reste Endormi.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
