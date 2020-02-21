import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV79",
	localId: "SV79",

	// Card informations
	name: {
		en: "Silvally-GX",
		fr: "Silvallié-GX",
	},

	hp: 210,

	type: [
		Type.COLORLESS,
	],

	dexId: 773,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV79/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV79/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV79/high",
		},
	},

	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 727,
		type: AbilityType.TALENT,
		name: {
			en: "Gyro Unit",
			fr: "Gyro-Unité",
		},
		text: {
			en: "Your Basic Pokémon in play have no Retreat Cost.",
			fr: "Vos Pokémon de base en jeu n’ont pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Turbo Drive",
			fr: "Propulsion Turbo",
		},
		text: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
		},
		damage: 120
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rebel-GX",
			fr: "Rebelle-GX",
		},
		text: {
			en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
