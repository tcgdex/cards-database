import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-252",
	localId: 252,

	// Card informations
	name: {
		en: "Volcarona-GX",
		fr: "Pyrax-GX",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/252/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/252/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/252/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/252/high.png",
		},
	},

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	tags: [
		Tag.GX,
		Tag.STAGE1,
	],

	illustrator: {
		id: 172,
		name: "PLANETA Tsuji"
	},

	abilities: [{
		id: 775,
		type: AbilityType.TALENT,
		name: {
			en: "Flaming Shot",
			fr: "Tir Enflammé",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a {R} Energy card from your hand. If you do, put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Backfire",
			fr: "Retour de Feu",
		},
		text: {
			en: "Put 2 {R} Energy attached to this Pokémon into your hand.",
			fr: "Placez 2 Énergies Fire attachées à ce Pokémon dans votre main.",
		},
		damage: 160
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Massive Heat Wave GX",
			fr: "Vague de Chaleur Massive-GX",
		},
		text: {
			en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

