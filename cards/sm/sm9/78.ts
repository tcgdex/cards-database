import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-78",
	localId: 78,

	// Card informations
	name: {
		en: "Kabutops",
		fr: "Kabutops",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/78/high",
		},
	},

	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 131,
		type: AbilityType.TALENT,
		name: {
			en: "Fossilized Memories",
			fr: "Souvenirs Fossilisés",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Supporter cards from their hand.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
			fr: "Éboulement",
		},
		text: {
			en: "This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
