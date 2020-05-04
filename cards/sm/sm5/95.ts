import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-95",
	localId: 95,

	// Card informations
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/95/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hasuno",



	attacks: [{
		name: {
			en: "Exeggutor's Paradise",
			fr: "Paradis Noadkoko",
		},
		text: {
			en: "For each of your Benched Exeggcute, search your deck for an Alolan Exeggutor or Alolan Exeggutor-GX and put it onto that Exeggcute to evolve it. Then, shuffle your deck.",
			fr: "Pour chacun des Noeunoeuf sur votre Banc, cherchez dans votre deck un Noadkoko d’Alola ou un Noadkoko d’Alola-GX et placez-le sur ce Noeunoeuf pour le faire évoluer. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Draco Meteor Barrage",
			fr: "Barrage de Draco Météore",
		},
		text: {
			en: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Grass attachée à ce Pokémon. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
