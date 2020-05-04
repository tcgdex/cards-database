import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-36",
	localId: 36,

	// Card informations
	name: {
		en: "Regice",
		fr: "Regice",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 378,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/36/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/36/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kazuaki Aihara",

	abilities: [{
		id: 387,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Regi Move",
			fr: "Regi-déplacement",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Discard 2 cards from your hand and choose 1 of your opponent's Active Pokémon that isn't an Evolved Pokémon. Then, your opponent switches that Pokémon with 1 of his or her Benched Pokémon. This power can't be used if Regice is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Défaussez 2 cartes de votre main et choisissez 1 des Pokémon Actifs non Évolués de votre adversaire. Ensuite, votre adversaire échange ce Pokémon avec 1 de ses Pokémon de Banc. Ce pouvoir ne peut pas être utilisé si Regice est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Reflect",
			fr: "Reflet glacé",
		},
		text: {
			en: "If Regice was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
			fr: "Si une attaque a infligé des dégâts à Regice lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
