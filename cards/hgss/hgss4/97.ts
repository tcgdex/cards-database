import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Mew",
		fr: "Mew",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/97/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/97/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/97/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 613,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lost Link",
			fr: "Lien perdu",
		},
		text: {
			en: "Mew can use the attacks of all of the Pokémon in the Lost Zone (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
			fr: "Mew peut utiliser les attaques de tous les Pokémon dans la Zone Perdue (les vôtres et ceux de votre adversaire). (Vous devrez néanmoins avoir suffisamment d'Énergie pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "See Off",
			fr: "Perdu de vue",
		},
		text: {
			en: "Search your deck for 1 Pokémon and put it in the Lost Zone. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon dans votre deck et placez-le dans la Zone Perdue. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

