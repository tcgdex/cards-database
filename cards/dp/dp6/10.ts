import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-10",
	localId: 10,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Metalosse",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/10/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/10/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/10/high",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 375,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magnetic Reversal",
			fr: "Renversement magnétique",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Mammochon est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Comet Punch",
			fr: "Poing météore",
		},
		text: {
			en: "During your next turn, Metagross's Extra Comet Punch attack's base damage is 100.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Poing météore de Mammochon sont de 100.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
