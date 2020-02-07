import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Inteleon",
		fr: "Lézargus",
	},

	hp: 160,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/58/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/58/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/58/high.png",
		},
	},

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 13,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Shady Dealings",
			fr: "Affaires Louches",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Dresseur, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Bullet",
			fr: "Aquaballe",
		},
		text: {
			en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

