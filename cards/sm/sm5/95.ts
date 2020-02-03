import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm5/95/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/95/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/95/high.png",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

