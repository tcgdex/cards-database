import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-20",
	localId: 20,

	// Card informations
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/20/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 585,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Payback",
			fr: "Retour de Poison",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feint Attack",
			fr: "Feinte",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon.",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
