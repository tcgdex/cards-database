import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-206",
	localId: 206,

	// Card informations
	name: {
		en: "Whimsicott-GX",
		fr: "Farfaduvet-GX",
	},

	hp: 190,

	type: [
		Type.FAIRY,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/206/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/206/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/206/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/206/high.png",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 495,
		type: AbilityType.TALENT,
		name: {
			en: "Fluffy Cotton",
			fr: "Coton Douillet",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Energy Blow",
			fr: "Coup d’Énergie",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées à ce Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Toy Box-GX",
			fr: "Coffre à Jouets-GX",
		},
		text: {
			en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 5 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

