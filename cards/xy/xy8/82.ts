import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-82",
	localId: 82,

	// Card informations
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 473,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/82/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/82/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/82/high.png",
		},
	},

	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 70,
		type: AbilityType.TALENT,
		name: {
			en: "Thick Fat",
			fr: "Isograisse",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks from your opponent's Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Primordial Boom",
			fr: "Boom Originel",
		},
		text: {
			en: "If you have a Stadium card in play, this attack does 40 more damage. If your opponent has a Stadium card in play, heal 40 damage from this Pokémon.",
			fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires. Si votre adversaire a une carte Stade en jeu, soignez 40 dégâts à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

