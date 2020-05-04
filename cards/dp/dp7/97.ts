import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-97",
	localId: 97,

	// Card informations
	name: {
		en: "Heatran",
		fr: "Heatran LV.X",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/97/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/97/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/97/high",
		},
	},

	evolveFrom: {
		fr: "Heatran LV.X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 835,
		type: AbilityType.POKEBODY,
		name: {
			en: "Heat Metal",
			fr: "Chaleur métallique",
		},
		text: {
			en: "Your opponent can't remove the Special Condition Burned by evolving or devolving his or her Burned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Burned Pokémon.) Whenever your opponent flips a coin for the Special Condition Burned between turns, treat it as tails.",
			fr: "Votre adversaire ne peut pas retirer l'État Spécial Brûlé en évoluant ou dés-évoluant son Pokémon Brûlé. (Cela comprend placer une carte Pokémon Niveau Sup sur le Pokémon Brûlé.) Lorsque votre adversaire lance une pièce pour l'État Spécial Brûlé entre deux tours, considérez que c'est une pile.",
		}
	}],



	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
