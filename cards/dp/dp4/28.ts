import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/28/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/28/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/28/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 843,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Trump Card",
			fr: "Atout",
		},
		text: {
			en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si 1 ou plusieurs de vos Pokémon ont été mis K.O lors du dernier tour de votre adversaire, choisissez n'importe quelle carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psych Up",
			fr: "Boost",
		},
		text: {
			en: "During your next turn, Slowking's Psych Up attack's base damage is 60.",
			fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Boost de Roigada sont de 60.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
