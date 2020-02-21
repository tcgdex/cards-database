import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV57",
	localId: "SV57",

	// Card informations
	name: {
		en: "Electrode-GX",
		fr: "Électrode-GX",
	},

	hp: 190,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV57/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV57/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV57/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 961,
		type: AbilityType.TALENT,
		name: {
			en: "Extra Energy Bomb",
			fr: "Bombe Extra-Énergétique",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach 5 Energy cards from your discard pile to your Pokémon, except Pokémon-GX or Pokémon-EX, in any way you like. If you do, this Pokémon is Knocked Out.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher 5 cartes Énergie de votre pile de défausse à vos Pokémon, à l’exception des Pokémon-GX et Pokémon-EX, de la manière que vous voulez. Dans ce cas, ce Pokémon est mis K.O.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Crush and Burn-GX",
			fr: "Écra-Brûle-GX",
		},
		text: {
			en: "Discard any amount of Energy from your Pokémon. This attack does 50 more damage for each card you discarded in this way. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez n’importe quel nombre d’Énergies de vos Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
