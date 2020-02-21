import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-52",
	localId: 52,

	// Card informations
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/52/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cold Snap",
			fr: "Vague de Froid",
		},
		text: {
			en: "Your opponent can't play any Trainer cards from their hand during their next turn. If 1 of your Pokémon used Cold Snap during your last turn, this attack can't be used.",
			fr: "Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour. Si l’un de vos Pokémon a utilisé Vague de Froid pendant votre dernier tour, cette attaque ne peut pas être utilisée.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard",
			fr: "Blizzard",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
