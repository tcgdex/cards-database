import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-63",
	localId: 63,

	// Card informations
	name: {
		en: "Muk",
		fr: "Grotadmorv",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/63/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/63/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/63/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 40,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Sacs",
			fr: "Sacs de Poison",
		},
		text: {
			en: "The Special Condition Poisoned is not removed when your opponent's Pokémon evolve or devolve.",
			fr: "L’État Spécial Empoisonné n’est pas retiré lorsque le Pokémon de votre adversaire évolue ou dés-évolue.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Toxic Secretion",
			fr: "Sécrétion Toxique",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
