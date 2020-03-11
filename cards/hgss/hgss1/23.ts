import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/23/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/23/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/23/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 194,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sleep Pendulum",
			fr: "Pendulo dodo",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep. This power can't be used if Hypno is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Défenseur est maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Hypnomade est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Shot",
			fr: "Attaque Psy",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à l’un des Pokémon du Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
