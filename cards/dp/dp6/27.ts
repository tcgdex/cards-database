import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-27",
	localId: 27,

	// Card informations
	name: {
		en: "Ditto",
		fr: "Metamorph",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/27/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/27/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/27/high",
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
		id: 562,
		type: AbilityType.POKEBODY,
		name: {
			en: "Ditto DNA",
			fr: "ADN Metamorph",
		},
		text: {
			en: "As long as Ditto is your Active Pokémon, its maximum HP is the same as your opponent's Active Pokémon. Ditto can use the attacks of that Pokémon as its own. (You still need the necessary Energy to use each attack.) If that Pokémon is no longer your opponent's Active Pokémon, choose 1 of your opponent's Active Pokémon for Ditto to copy.",
			fr: "Tant que Metamorph est votre Pokémon Actif, son maximum de PV est le même que celui du Pokémon Actif de votre adversaire. Metamorph peut utiliser les attaques de ce Pokémon comme si elles étaient les siennes. (Vous devez toujours utiliser l'Énergie nécessaire pour utiliser chaque attaque.) Si ce Pokémon n'est plus le Pokémon Actif de votre adversaire, choisissez 1 des Pokémon Actifs de votre adversaire. Metamorph copie ce Pokémon.",
		}
	}],



	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
