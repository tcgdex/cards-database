import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-112",
	localId: 112,

	// Card informations
	name: {
		en: "Gyarados-GX",
		fr: "Léviator-GX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/112/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 70
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Draconic Disaster",
			fr: "Désastre Draconien",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 100 more damage. Then, discard that Stadium card.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
		},
		damage: 100
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Dread Storm-GX",
			fr: "Tempête d’Effroi-GX",
		},
		text: {
			en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
