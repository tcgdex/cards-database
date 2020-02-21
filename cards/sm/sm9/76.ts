import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-76",
	localId: 76,

	// Card informations
	name: {
		en: "Omastar",
		fr: "Amonistar",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/76/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 126,
		type: AbilityType.TALENT,
		name: {
			en: "Fossil Bind",
			fr: "Lien Fossile",
		},
		text: {
			en: "As long as you have fewer Pokémon in play than your opponent, they can't play any Item cards from their hand.",
			fr: "Tant que vous avez moins de Pokémon en jeu que votre adversaire, celui-ci ne peut pas jouer de cartes Objet de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
