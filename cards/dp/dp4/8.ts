import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/8/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/8/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/8/high.png",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 191,
		type: AbilityType.POKEBODY,
		name: {
			en: "Wild Growth",
			fr: "Luxuriance",
		},
		text: {
			en: "Each basic Grass Energy card attached to your Grass Pokémon provides Grass Grass Energy instead. You can't use more than 1 Wild Growth Poké-Body each turn.",
			fr: "Chaque carte Énergie Grass attachée à vos Pokémon Grass fournit maintenant de l'Énergie Grass Grass. Vous ne pouvez pas utiliser plus d'1 Poké-Body Luxuriance par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Blade",
			fr: "Lame-feuille",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card

