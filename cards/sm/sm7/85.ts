import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-85",
	localId: 85,

	// Card informations
	name: {
		en: "Alolan Raticate-GX",
		fr: "Rattatac d’Alola-GX",
	},

	hp: 200,

	type: [
		Type.DARKNESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/85/high",
		},
	},

	evolveFrom: {
		en: "Alolan Rattata",
		fr: "Rattata d’Alola",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {
			en: "Chuck Away",
			fr: "Bazarder",
		},
		text: {
			en: "Discard up to 2 cards from your hand. This attack does 40 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu’à 2 cartes de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 40
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Fang",
			fr: "Croc de Mort",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 150
	},{
		name: {
			en: "Item Maniac-GX",
			fr: "Fou d’Objets-GX",
		},
		text: {
			en: "Search your deck for up to 6 Item cards, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 6 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
