import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-71",
	localId: 71,

	// Card informations
	name: {
		en: "Illumise",
		fr: "Lumivole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 314,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/71/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/71/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 877,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Scent Conduct",
			fr: "Conducteur de parfum",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Grass Basic Pokémon and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Illumise is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck un Pokémon de base Grass et placez-le sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Lumivole est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Firefly Scent",
			fr: "Parfum de luciole",
		},
		text: {
			en: "If the Defending Pokémon has any Poké-Bodies, that Pokémon is now Asleep.",
			fr: "Si le Pokémon Défenseur possède des Poké-Bodies, il est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

