import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-77",
	localId: 77,

	// Card informations
	name: {
		en: "Zoroark-GX",
		fr: "Zoroark-GX",
	},

	hp: 210,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/77/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/77/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/77/high.png",
		},
	},

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 419,
		type: AbilityType.TALENT,
		name: {
			en: "Trade",
			fr: "Troc",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Riotous Beating",
			fr: "Méchante Raclée",
		},
		text: {
			en: "This attack does 20 damage for each of your Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Trickster-GX",
			fr: "Histrion-GX",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack. (You can't use more than 1 GX attack in a game.)",
			fr: "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

