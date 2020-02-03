import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-56",
	localId: 56,

	// Card informations
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/56/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/56/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/56/high.png",
		},
	},

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1424,
		type: AbilityType.TALENT,
		name: {
			en: "Six Feet Under",
			fr: "Pas de Quartier",
		},
		text: {
			en: "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Slap of Misfortune",
			fr: "Revers de Fortune",
		},
		text: {
			en: "Whenever your opponent flips a coin during his or her next turn, treat it as tails.",
			fr: "Chaque fois que votre adversaire lance une pièce pendant son prochain tour, considérez que c'est pile.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
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

