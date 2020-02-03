import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-117",
	localId: 117,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/117/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/117/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/117/high.png",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},

	abilities: [{
		id: 620,
		type: AbilityType.TALENT,
		name: {
			en: "Diving Draw",
			fr: "Plonge et Pioche",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Attack Command",
			fr: "Ordre d'Assaut",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
			fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

