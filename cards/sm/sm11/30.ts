import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-30",
	localId: 30,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/30/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Spirit Burner",
			fr: "Brûleur d’Esprit",
		},
		text: {
			en: "Discard the top 5 cards of your deck. This attack does 60 more damage for each Pokémon you discarded in this way. Then, put any number of Fire Pokémon you discarded in this way onto your Bench.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon défaussé de cette façon. Ensuite, placez autant de Pokémon Fire défaussés de cette façon que vous le voulez sur votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
